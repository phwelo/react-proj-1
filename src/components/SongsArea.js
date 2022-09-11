import React, { useState } from "react";
import List from "@mui/material/List";
import ListSongs from "./ListSongs";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function SongsArea(props) {



  if (props.songs.length > 0 && props.navTab == 0) {
    return (
        <ListSongs
          songs={props.songs}
          selectSong={props.selectSong}
        / >
    );
  } else if (props.songs.length == 0 && props.navTab == 0 && props.searchIsSearching === false) {
    return (      
      <Box>
        <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
        <br></br>
        <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
        <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
        <br></br>
        <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
        <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
        <br></br>
        <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
      </Box>
    )
  } else if (props.navTab == 1 && props.searchResults.length == 0 && props.searchIsSearching === false && props.firstSearch == true) {
    return (
      <Box key={props.searchIsSearching}>
        Use the search box to find new tabs
      </Box>
    );
  } 
  else if (props.navTab == 1 && props.searchResults.length == 0 && props.searchIsSearching === false && props.firstSearch === false) {
    return (
      <Box key={props.searchIsSearching}>
        Nothing found
      </Box>
    );
  }
  else if (props.navTab == 1 && props.searchIsSearching === true) {
    return (
      <Box>
      <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
      <br></br>
      <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
      <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
      <br></br>
      <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
      <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
      <br></br>
      <Skeleton variant="rectangle" width={210} height={60}></Skeleton>
      </Box>
    );
  } 
  
  else {
    return (
        <ListSongs
          songs={props.searchResults}
          fromSearch={true}
          selectSong={props.selectSong}
          downloadSong = {props.downloadSong}
        />
    );
  }
}

export default SongsArea;
