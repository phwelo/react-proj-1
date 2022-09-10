import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PropaneSharp } from "@mui/icons-material";

function SearchBox(props) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="success"
        onChange={event => props.onChange(event.target.value)}

        focused
      />
    </Box>
  );
}

export default SearchBox;
