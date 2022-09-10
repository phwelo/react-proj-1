import React, { useState } from "react";
import List from "@mui/material/List";
import ListSongs from "./ListSongs";
import Box from "@mui/material/Box";

import { get } from "utils/requests";


import Skeleton from "@mui/material/Skeleton";

function SongsArea(props) {

  if (props.songs.length > 0 && props.navTab == 0) {
    return (
      <List>
        <ListSongs
          songs={props.songs}
          selectSong={props.selectSong}
        ></ListSongs>
      </List>
    );
  } else if (props.songs.length == 0 && props.navTab == 0 && props.searchIsSearching === false) {
    return <Skeleton variant="rectangle"></Skeleton>;
  } else if (props.navTab == 1 && props.searchResults.length == 0) {
    return (
      <Box>
        <>Search the web for new tabs</>
        
      </Box>
    );
  } 
  else if (props.navTab == 1 && props.searchIsSearching === true) {
    return (
      <Box>
        searching
      </Box>
    );
  } 
  
  
  
  else {
    return (
      <List style={{ maxHeight: 600, overflow: "auto", width: "100%" }}>
        <ListSongs
          songs={props.searchResults}
          selectSong={props.selectSong}
        ></ListSongs>
      </List>
    );
  }
}

export default SongsArea;
