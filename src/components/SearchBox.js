import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox(props) {
  const [query, setQuery] = React.useState("");

  const handleTextBoxChange = (value) => {
    setQuery(value);
  };

  return (
    <Box component="form" noValidate autoComplete="off" display="flex">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="success"
        value={props.query}
        onChange={(e) => handleTextBoxChange(e.target.value)}
      />
      <Button
        onClick={() => props.handleSearchButton(query)}
        variant="contained"
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBox;
