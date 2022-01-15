import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

export function Spinner() {
  return (
    <Box textAlign="center" marginTop={10}>
      <CircularProgress />
    </Box>
  );
}
