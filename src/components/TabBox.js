import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";
import { Pageview } from "@mui/icons-material";

const tabBoxStyle = {
  fontFamily: "monospace",
  maxHeight: "100vh",
  overflow: "auto",
  width: "100%",
}

function TabBox(props) {
  function displayParsedChords(chords) {
    return chords.map((chord) => (
      <ListItem key={chord.content.index}>{chord.content.toString()}</ListItem>
    ));
  }

  function TabArea() {
    if (props.selectedTabLoading === true) {
      return (
        <Box sx={{ maxHeight: "100vh", width: "100%", overflow: "scroll-vertical" }}>
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
            style={tabBoxStyle}
          >
            {displayParsedChords(props.song.parsed)}
          </List>
        );
      } else if (props.error) {
        return <Box>{"ERROR:" + props.error.toString()}</Box>;
      } else
        return (
          <Box style={tabBoxStyle} sx={{marginTop:"20vh"}}>
            select <Pageview /> on a tab to load it into this panel
          </Box>
        );
    }
  }

  function SongHeader() {
    if (props.selectedTabLoading === true) {
      return (
        <>
          <Skeleton variant="H1" style={{marginTop:"5vh", padding:0}} height={60} />
          <Skeleton variant="H2" style={{margin:0, padding:0}} height={60} />
        </>
      );
    } else {
      return (
        <>
          <h1 style={{marginTop:"5vh", padding:0}}>{props.song.song_name}</h1>
          <h2 style={{margin:0, padding:0}}>{props.song.artist_name}</h2>
        </>
      );
    }
  }

  return (
    
      <>
        <SongHeader sx={{marginTop:"50px"}}></SongHeader>
        <TabArea style={{marginTop:"50px"}}></TabArea>
      </>
    
  );
}

export default TabBox;
