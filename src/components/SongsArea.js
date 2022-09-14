import React from "react";
import ListSongs from "./ListSongs";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function SongsArea(props) {
  if (props.songs.length > 0) {
    return (
      <Box sx={{ overflowY: "scroll", maxHeight: 600 }}>
        <ListSongs songs={props.songs} selectSong={props.selectSong} />
      </Box>
    );
  } else if (props.songs.length == 0) {
    return (
      <Box sx={{ maxHeight: 600, overflow: "auto" }}>
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
      </Box>
    );
  }
}

export default SongsArea;
