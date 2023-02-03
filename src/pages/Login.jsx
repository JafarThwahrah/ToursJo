import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { ErrorSharp } from "@mui/icons-material";
import { loginDataContext } from "../App";
import { useContext } from "react";

// import "../styles/Login.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}></Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const initialValue = { user_email: "", password: "" };
  const setUserLoginData = useContext(loginDataContext);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [responseErr, setResponseErr] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // console.log(formData);

  const validate = (data) => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!data.user_email) {
      errors.user_email = "Email is required";
    } else if (!emailRegex.test(data.user_email)) {
      errors.user_email =
        "Wrong email format, Your input should look like example@gmail.com";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(data.password)) {
      errors.password =
        "Password Should contains at least one higher case letter,one number and should be more than 8 characters long";
    }

    return errors;
  };

  useEffect(() => {
    console.log(formErrors);

    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const handleSubmit = (event) => {
    // const data = new FormData(event.currentTarget);
    // let email = data.get("email");
    // let password = data.get("password");

    event.preventDefault();
    setIsSubmit(true);

    setFormErrors(validate(formValues));

    const data = new FormData(event.currentTarget);

    console.log(data.get("email"));
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      axios
        .post("http://localhost:8000/api/login", data)
        .then((res) => {
          localStorage.setItem("loginData", JSON.stringify(res));
          setUserLoginData(res);
          setLoginData(res);
          console.log(res);
          setTimeout(() => {
            window.location.reload(false);
          }, 500);
        })
        .catch((err) => {
          setResponseErr(err.response.data.message);
          // console.log(err.response.data.message);
        });
    });

    navigate(`/userprofile/${loginData.data.user.id}`);
  };

  const handleLogin = (res) => {
    console.log(res);
    let decoded = jwt_decode(res.credential);
    console.log(decoded);

    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      axios
        .post("http://localhost:8000/api/googlelogin", decoded)
        .then((res) => {
          localStorage.setItem("loginData", JSON.stringify(res));
          console.log(res);
          setTimeout(() => {
            window.location.reload(false);
          }, 500);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    navigate(`/userprofile/${loginData.data.user.id}`);

    // localStorage.setItem("loginData", JSON.stringify(googleData));
    // setLoginData(googleData);
  };

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
    googleLogout();
  };

  useEffect(() => {
    if (loginData) {
      navigate(`/userprofile/${loginData?.data.user.id}`);
    }
  }, [loginData]);

  return (
    <div
      style={{
        backgroundImage: `url(https://www.wadirumnightluxury.com/sites/default/files/_MGL2732sss.jpg)`,
        minHeight: "100vh",
      }}>
      <ThemeProvider theme={theme}>
        <Container className="py-5" component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {loginData ? (
              <div>
                <h3>You logged in as {loginData.email}</h3>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}>
                <p
                  style={{
                    color: "red",
                    fontSize: "16px",
                    marginTop: "2rem",
                    marginBottom: "0",
                  }}>
                  {/* {responseErr} */}
                </p>
                <p
                  style={{
                    color: "red",
                    fontSize: "16px",
                    marginTop: "2rem",
                    marginBottom: "0",
                  }}>
                  {formErrors.user_email}
                </p>

                <TextField
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="user_email"
                  autoComplete="email"
                  autoFocus
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "16px",
                    marginBottom: "0",
                  }}>
                  {formErrors.password}
                </p>
                <TextField
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                <div className="googlebtncontainer d-flex justify-content-center m-1">
                  <GoogleOAuthProvider
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    Referrer-Policy={"no-referrer-when-downgrade"}
                    cookiePolicy={"single_host_origin"}>
                    <GoogleLogin
                      style={{
                        backgroundColor: "#4285f4",
                        color: "white",
                        width: "220px",
                        height: "40px",
                        borderRadius: "5px",
                        fontSize: "16px",
                      }}
                      buttonText="Sign in with Google"
                      onSuccess={handleLogin}
                      onError={handleFailure}
                      useOneTap
                    />
                  </GoogleOAuthProvider>
                </div>

                <Grid container>
                  <Grid item>
                    <Link
                      className="text-light"
                      href="/register"
                      variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
