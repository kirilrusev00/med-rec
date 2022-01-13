import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Pharmacy } from "../../models/Pharmacy";
import { makeStyles } from "@material-ui/core/styles";

export interface PharmacyCardProps {
  pharmacy: Pharmacy;
}

const useStyles = makeStyles({
  card: {
    marginBottom: "10px",
  },
});

export function PharmacyCard({ pharmacy }: PharmacyCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea component={RouterLink} to={`/pharmacy/${pharmacy.id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pharmacy.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {pharmacy.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
