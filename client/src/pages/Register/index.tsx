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

// Only users will register

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!username || !password || !firstName || !lastName || !email) {
      return;
    }

    // TODO:
    // 1) Create auth service and register the user
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

          <TextField
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            label="First Name"
            variant="outlined"
          />

          <TextField
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            label="Last name"
            variant="outlined"
          />

          <TextField
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            variant="outlined"
          />

          <Button type="submit" color="primary" variant="contained">
            Register
          </Button>

          <Typography>
            Already have an account?{" "}
            <Link component={RouteLink} to="/login" underline="none">
              Login
            </Link>
          </Typography>
        </Box>
      </form>
    </Container>
  );
}
