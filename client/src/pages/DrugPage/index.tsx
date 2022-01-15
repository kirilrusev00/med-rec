import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// TODO:
// - Remove hardcoded drug and get it from the server using useAsync
// - Handle errors

let drug = { id: 1, name: "Aspirin" };

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    gap: "20px",
    alignItems: "center",
  },
  button: {
    marginTop: "10px",
  },
});

export function DrugPage() {
  const { pharmacyId } = useParams<{ pharmacyId: string }>(); // will be used later
  const { drugId } = useParams<{ drugId: string }>(); // will be used later
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h4">{drug.name}</Typography>

      {/* TODO: 
      - The button should appear only if the user is pharmacy
      - Make it work*/}

      <Button variant="contained" color="primary" className={classes.button}>
        Delete
      </Button>
    </Container>
  );
}
