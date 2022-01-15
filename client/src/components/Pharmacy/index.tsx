import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Container,
  Card,
  CardActionArea,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { DrugList } from "../DrugList";
import { Link as RouterLink } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

export interface PharmacyProps {
  pharmacyId: number;
}

const useStyles = makeStyles({
  card: {
    display: "flex",
    marginBottom: "20px",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  cardActionArea: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
  },
});

export function Pharmacy({ pharmacyId }: PharmacyProps) {
  const [search, setSearch] = useState("");
  const classes = useStyles();

  return (
    <>
      <Box textAlign="center" marginTop={5} marginBottom={5}>
        <TextField
          placeholder="Search"
          variant="outlined"
          onChange={(event) => setSearch(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Container maxWidth="md">
        <Card className={classes.card}>
          <CardActionArea
            component={RouterLink}
            to={`/pharmacy/${pharmacyId}/drugs/new`}
            className={classes.cardActionArea}
          >
            <AddCircleOutlineIcon />
          </CardActionArea>
        </Card>

        <DrugList pharmacyId={pharmacyId} />
      </Container>
    </>
  );
}
