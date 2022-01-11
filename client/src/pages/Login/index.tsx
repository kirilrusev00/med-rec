import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { Link as RouteLink } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();

    if (!username || !password) {
      return;
    }

    // TODO:
    // 1) Create auth service and login the user
    // 2) Redirect to homepage
    // 3) Handle errors
  }

  return (
    <Container maxWidth="xs">
      <form onSubmit={submit}>
        <Box display="grid" gridGap={7} marginTop={10}>
          <TextField
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            label="Username"
            variant="outlined"
          />

          <TextField
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Password"
            variant="outlined"
            type="password"
          />

          <Button type="submit" color="primary" variant="contained">
            Login
          </Button>

          <Typography>
            Don&apos;t have an account?{" "}
            <Link component={RouteLink} to="/register" underline="none">
              Register
            </Link>{" "}
          </Typography>
        </Box>
      </form>
    </Container>
  );
}
