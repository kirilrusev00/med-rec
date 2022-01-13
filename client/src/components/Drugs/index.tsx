import { Box, Container, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { DrugList } from "../DrugList";

export function Drugs() {
  const { id } = useParams<{ id: string }>();
  const [search, setSearch] = useState("");

  return id ? (
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
        <DrugList pharmacyId={Number(id)} />
      </Container>
    </>
  ) : null;
}
