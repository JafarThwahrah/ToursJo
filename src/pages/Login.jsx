import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // const data = new FormData(event.currentTarget);
    // let email = data.get("email");
    // let password = data.get("password");

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log(data.get("email"));
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      axios
        .post("http://localhost:8000/api/login", data)
        .then((res) => {
          localStorage.setItem("loginData", JSON.stringify(res));
          setLoginData(res);
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
        backgroundImage: "url(https://images2.alphacoders.com/503/503890.jpg)",
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="user_email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
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
                <div className="googlebtncontainer">
                  <GoogleOAuthProvider
                    style={{ margin: "1rem", width: "30rem" }}
                    clientId={
                      "557643652967-0toe8dndlbkfvqkd7gkugv397oail9hc.apps.googleusercontent.com"
                    }
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
