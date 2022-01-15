import React, { FormEvent } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useAsyncAction } from "../../hooks/use-async-action";
import { drugService } from "../../services/drug-service";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/use-current-user";
import { Spinner } from "../../components/Spinner";

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
  button: {
    marginTop: "10px",
    width: "200px",
  },
});
export function CreateDrug() {
  const classes = useStyles();
  const user = useCurrentUser();
  const [fields, setFields] = useState({
    genericName: "",
  });
  const history = useNavigate();

  const {
    trigger: submit,
    loading,
    error,
  } = useAsyncAction(async () => {
    const drug = await drugService.createDrug(user!.id, fields.genericName);

    history(`drugs/${drug.id}`);
  });

  if (error) {
    <Typography color="error">{error.message}</Typography>;
  }

  if (loading) {
    <Spinner />;
  }

  return (
    <Container
      maxWidth="xs"
      className={classes.form}
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        submit();
      }}
    >
      <Typography variant="h5">Add a new drug</Typography>

      <TextField
        label="Generic name"
        value={fields.genericName}
        className={classes.field}
        onChange={(event) =>
          setFields({
            ...fields,
            genericName: event.target.value,
          })
        }
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Submit
      </Button>
    </Container>
  );
}
