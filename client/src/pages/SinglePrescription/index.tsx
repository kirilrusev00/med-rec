import { Container, Typography, Box, Button } from "@material-ui/core";
import { useLocation, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Prescription } from "../../models/Prescription";
import { useAsync } from "../../hooks/use-async";
import { prescriptionService } from "../../services/prescription-service";

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

interface CustomizedState {
  prescription: Prescription;
}

export function SinglePrescription() {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();

  const {
    data: prescription,
    loading,
    error,
  } = useAsync(() => prescriptionService.getPrescription(Number(id)), []);

  return prescription ? (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.title} variant="h4">
        {prescription.drugName}
      </Typography>

      <Box marginTop={5} className={classes.box}>
        <Typography>
          <Typography className={classes.description}>
            How to consume:
          </Typography>
          {prescription.in}
        </Typography>
        <Typography>
          <Typography className={classes.description}>Date:</Typography>
          {prescription.date}
        </Typography>
      </Box>
    </Container>
  ) : null;
}
