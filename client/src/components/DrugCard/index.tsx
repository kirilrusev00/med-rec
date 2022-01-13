import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Drug } from "../../models/Drug";

export interface DrugCardProps {
  drug: Drug;
  pharmacyId: number;
}

export function DrugCard({ drug, pharmacyId }: DrugCardProps) {
  return (
    <Card>
      <CardActionArea
        component={RouterLink}
        to={`/pharmacy/${pharmacyId}/drugs/${drug.id}`}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {drug.name}
          </Typography>

          {/* TODO: Add the other info about the drugs */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
