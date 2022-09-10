import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

function BottomBar() {
  return (
    <div>
      <ShareIcon></ShareIcon>
      <EditIcon></EditIcon>
      <DeleteIcon></DeleteIcon>
      <SaveIcon></SaveIcon>
    </div>
  );
}

export default BottomBar;
