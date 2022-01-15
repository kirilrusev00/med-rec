import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Drug } from "../../models/Drug";
import { DrugCard } from "../DrugCard";

// TODO:
// - Remove hardcoded drugs and get them from the server with useAsync (include searching as filtration)
// - Handle errors

let drugs: Drug[] = [
  { id: 1, name: "Paracetamol" },
  { id: 2, name: "Aspirin" },
  { id: 3, name: "Nurofen" },
];

export interface DrugListProps {
  pharmacyId: number;
}

const useStyles = makeStyles({
  list: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
  },
});

export function DrugList({ pharmacyId }: DrugListProps) {
  const classes = useStyles();

  return drugs ? (
    <Box className={classes.list}>
      {drugs.map((drug) => (
        <DrugCard key={drug.id} drug={drug} pharmacyId={pharmacyId} />
      ))}
    </Box>
  ) : null;
}
