import {
  Box,
  Button,
  Container,
  NativeSelect,
  TextField,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles({
  select: {
    paddingLeft: 5,
  },
});

// TODO:
// Discuss what data should the user provide in order to register

export function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Male");

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!username || !password || !age || !sex) {
      return;
    }

    const ageToNumber = Number(age);

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
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            label="Age"
            variant="outlined"
            type="number"
          />

          <NativeSelect
            value={sex}
            onChange={(event) => setSex(event.target.value)}
            className={classes.select}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </NativeSelect>

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
