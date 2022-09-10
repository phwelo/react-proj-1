import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";


function BottomBar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center"}}>
      <ShareIcon></ShareIcon>
      <EditIcon></EditIcon>
      <DeleteIcon></DeleteIcon>
      <SaveIcon></SaveIcon>
    </Box>
  );
}

export default BottomBar;
