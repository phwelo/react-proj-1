import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";
import { Pageview } from "@mui/icons-material";

function TabBox(props) {

  function displayParsedChords(chords) {
    return chords.map((chord) => (
      <ListItem key={chord.content.index}>{chord.content.toString()}</ListItem>
    ));
  }
  {
    console.log(props.song);
  }

  function TabArea() {
    // this doesn't seem to work?
    if (props.selectedTabLoading === true) {
      return (
        <Box sx={{ width: 600, height: 600 }}>
          {"Loading "}
          <Skeleton variant="h1"></Skeleton>
          <Skeleton variant="h2"></Skeleton>
          <Skeleton variant="text"></Skeleton>
        </Box>
      );
    } else {
      if (props.song.parsed) {
        return(
        <List style={{ fontFamily: 'monospace', maxHeight: 600, overflow: "auto", width: "100%" }}>
          {displayParsedChords(props.song.parsed)}
        </List>
        )
      }
      else return(<>select <Pageview/> on a tab to load it into this panel</>)
    }
  }

  return (
    <div>
      {props.song ? (
        <Box>
          <h1>{props.song.song_name}</h1>
          <h2>{props.song.artist_name}</h2>
          <TabArea></TabArea>
        </Box>
      ) : (
        <Box>
          <h1>Lorem ...Lorem Lorem Lorem Lorem Lorem Lorem </h1>
        </Box>
      )}
    </div>
  );
}

export default TabBox;
