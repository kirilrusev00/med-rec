import React from "react";
import { Box, Container, InputAdornment, TextField } from "@material-ui/core";
import { PharmacyList, PharmacyListProps } from "../PharmacyList";
import { Search } from "@material-ui/icons";
import { useState } from "react";

// TODO:
// - Remove hardcoded pharmacies and get them from the server using useAsync (include searching as filtration)
// - Handle errors

let pharmacyList: PharmacyListProps = {
  pharmacies: [
    { id: 1, name: "Mareshki", address: "Ralevitsa 69" },
    { id: 2, name: "Pharmacy 24/7", address: "Unknown address 404" },
    { id: 3, name: "Elvira", address: "Bulgaria 143" },
  ],
};

export function Patient() {
  const [search, setSearch] = useState("");

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
        <PharmacyList pharmacies={pharmacyList.pharmacies} />
      </Container>
    </>
  );
}
