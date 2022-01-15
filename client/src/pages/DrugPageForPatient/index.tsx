import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useCurrentUser } from "../../hooks/use-current-user";
import { useAsync } from "../../hooks/use-async";
import { Spinner } from "../../components/Spinner";
import { drugService } from "../../services/drug-service";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    gap: "20px",
  },
  title: {
    alignSelf: "center",
  },
  button: {
    marginTop: "10px",
    width: "200px",
    alignSelf: "center",
  },
  description: {
    fontWeight: "bold",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export function DrugPageForPatient() {
  const { pharmacyId } = useParams<{ pharmacyId: string }>();
  const { drugId } = useParams<{ drugId: string }>();
  const classes = useStyles();

  const {
    data: drug,
    loading,
    error,
  } = useAsync(
    () => drugService.getDrug(Number(pharmacyId), Number(drugId)),
    []
  );

  if (error) {
    <Typography color="error">{error.message}</Typography>;
  }

  if (loading) {
    <Spinner />;
  }

  {
    drug && (
      <Container maxWidth="md" className={classes.container}>
        <Typography className={classes.title} variant="h4">
          {drug.genericName}
        </Typography>

        <Box marginTop={5} className={classes.box}>
          <Typography>
            <Typography className={classes.description}>Brand:</Typography>
            {drug.brandName}
          </Typography>
          <Typography>
            <Typography className={classes.description}>Substance:</Typography>
            {drug.substanceName}
          </Typography>
          <Typography>
            <Typography className={classes.description}>
              Manufacturer:
            </Typography>
            {drug.manufacturerName}
          </Typography>
          <Typography>
            <Typography className={classes.description}>Dosage:</Typography>
            {drug.dosageForm}
          </Typography>
          <Typography>
            <Typography className={classes.description}>Route:</Typography>
            {drug.route}
          </Typography>
          <Typography>
            <Typography className={classes.description}>
              Marketing status:
            </Typography>
            {drug.marketingStatus}
          </Typography>
        </Box>
      </Container>
    );
  }
}