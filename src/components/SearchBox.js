import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox(props) {
  return (
    <Box component="form" noValidate autoComplete="off" display="flex">
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="success"
        onChange={event => props.onChange(event.target.value)}
        
      />
      <Button onClick={props.handleSearchButton} variant="contained">Search</Button>
    </Box>
  );
}

export default SearchBox;
