import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();
// axios.defaults.withCredentials = true;
export default function Login() {
  const [idErr, setIdErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post("http://localhost:8000/user/login", {
        userId: data.get("id"),
        password: data.get("password"),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data.err);
        if (err) {
          if (err.response.data.err === "userId is not exists.") {
            setIdErr(true);
          } else if (err.response.data.err === "Password is wrong.") {
            setPwErr(true);
          }
        }
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 150, height: 150 }} alt="logo" src="/plainLogo.png" />

          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={idErr}
              margin="normal"
              required
              fullWidth
              name="id"
              id="id"
              label="id"
              autoFocus
              helperText={idErr ? "존재하지 않는 유저입니다" : ""}
              onChange={() => {
                setIdErr(false);
              }}
            />
            <TextField
              error={pwErr}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              helperText={pwErr ? "잘못된 비밀번호 입니다." : ""}
              autoComplete="current-password"
              onChange={() => {
                setPwErr(false);
              }}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, padding: "10px 0" }}>
              Log In
            </Button>
            <Link href="/signup" underline="none">
              <Button fullWidth variant="outlined" sx={{ padding: "10px 0" }}>
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{ height: 200 }} />
      </Container>
    </ThemeProvider>
  );
}
