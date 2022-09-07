import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";

function TabBox(props) {
  function displayParsedChords(chords) {
    return chords.map((chord) => (
      <ListItem key={chord.content.index}>{chord.content.toString()}</ListItem>
    ));
  }
  {
    console.log(props.song);
  }

  return (
    <div>
      {props.song ? (
        <Box>
          <h1>{props.song.song_name}</h1>
          <h2>{props.song.artist_name}</h2>
          {props.song.parsed ? (
            <List style={{ maxHeight: 600, overflow: "auto", width: "100%" }}>
              {displayParsedChords(props.song.parsed)}
            </List>
          ) : (
            <Box sx={{ width: 600, height: 600 }}>
              {" "}
              <Skeleton variant='h1'></Skeleton>
              <Skeleton variant='h2'></Skeleton>
              <Skeleton variant='text'></Skeleton>
            </Box>
          )}
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
