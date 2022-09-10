import React, { useState } from "react";
import List from "@mui/material/List";
import ListSongs from "./ListSongs";
import Box from "@mui/material/Box";

import { get } from "utils/requests";

import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

function SongsArea(props) {

  const query = props.query;



  if (props.songs.length > 0 && props.navTab == 0) {
    return (
      <List>
        <ListSongs songs={props.songs} selectSong={props.selectSong}></ListSongs>
      </List>
    );
  } else if (props.songs.length == 0 && props.navTab == 0) {
    return <Skeleton variant="rectangle"></Skeleton>;
  } else if (props.navTab == 1 && props.searchResults.length == 0) {
    return (
      <Box>
        <>Search the web for new tabs</>
        <Button onClick={props.handleSearchButton}>Search</Button>
      </Box>
    );
  } else {
    return (
      <List style={{ maxHeight: 600, overflow: "auto", width: "100%" }}>
        <ListSongs songs={props.searchResults} selectSong={props.selectSong}></ListSongs>
      </List>
    );
  }
}

export default SongsArea;
