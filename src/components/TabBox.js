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

  function TabArea() {
    if (props.selectedTabLoading === true) {
      return (
        <Box sx={{ maxHeight: 600, width: "100%", overflow: "auto" }}>
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
        </Box>
      );
    } else {
      if (props.song.parsed) {
        return (
          <List
            style={{
              fontFamily: "monospace",
              maxHeight: 600,
              overflow: "auto",
              width: "100%",
            }}
          >
            {displayParsedChords(props.song.parsed)}
          </List>
        );
      } else if (props.error) {
        return(
        <Box>
        {"ERROR:" + props.error.toString()}
        </Box>
        )
      }
      
      else
        return (
          <Box  >
            select <Pageview /> on a tab to load it into this panel
          </Box>
        );
    }
  }

  return (
    <Box>
      <Box>
        <h1>{props.song.song_name}</h1>
        <h2>{props.song.artist_name}</h2>
        <TabArea></TabArea>
      </Box>
    </Box>
  );
}

export default TabBox;
