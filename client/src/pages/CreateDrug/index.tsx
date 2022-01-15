import React from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    gap: "20px",
    alignItems: "center",
  },
  field: {
    width: "300px",
  },
});

// TODO:
// - Add more fields
// - Use useAsyncAction to post the new data
// - Handle errors

export function CreateDrug() {
  const classes = useStyles();
  const [fields, setFields] = useState({
    name: "",
  });

  return (
    <Container maxWidth="sm" className={classes.form}>
      <Typography variant="h5">Add a new drug</Typography>

      <TextField
        label="Name"
        value={fields.name}
        className={classes.field}
        onChange={(event) =>
          setFields({
            ...fields,
            name: event.target.value,
          })
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Container>
  );
}
