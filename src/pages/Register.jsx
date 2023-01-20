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
import { googleLogout } from "@react-oauth/google";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/register",
  withCredentials: true,
});

const onRequest = (config) => {
  // If http method is `post | put | delete` and XSRF-TOKEN cookie is
  // not present, call '/sanctum/csrf-cookie' to set CSRF token, then
  // proceed with the initial response
  if (
    /* other methods you want to add here */

    !Cookies.get("XSRF-TOKEN")
  ) {
    return setCSRFToken().then((response) => config);
  }
  return config;
};

const setCSRFToken = () => {
  return axiosInstance.get("/sanctum/csrf-cookie"); // resolves to '/api/csrf-cookie'.
};

axiosInstance.interceptors.request.use(onRequest, null);

const theme = createTheme();

export default function SignUp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("user_image", selectedFile);

    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      axios
        .post("http://localhost:8000/api/register", data)
        .then((res) => {
          localStorage.setItem("loginData", JSON.stringify(res));
          setLoginData(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
    googleLogout();
  };

  useEffect(() => {
    if (loginData) {
      navigate(`/userprofile/${loginData.data.user.id}`);
    }
  }, [loginData]);
  console.log(loginData);

  return (
    <div
      style={{
        backgroundImage: `url(https://www.wadirumnightluxury.com/sites/default/files/_MGL2732sss.jpg)`,
        minHeight: "100vh",
      }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />

          <Box
            sx={{
              paddingTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {loginData ? (
              <div>
                <h3>You logged in as {loginData.email}</h3>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        autoComplete="given-name"
                        name="user_name"
                        required
                        fullWidth
                        id="user_name"
                        label="User Name"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="user_email"
                        label="Email Address"
                        name="user_email"
                        autoComplete="user_email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password_confirmation"
                        label="Confirm Password"
                        type="password"
                        id="password_confirmation"
                        autoComplete="new-password"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Register As
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="user_role"
                          label="Register As">
                          <MenuItem value={"Tourist"}>Tourist</MenuItem>
                          <MenuItem value={"Advisor"}>Tour Advisor</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <label htmlFor="user_image">Personal Photo</label>
                      <TextField
                        required
                        fullWidth
                        name="user_image"
                        type="file"
                        id="user_image"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
