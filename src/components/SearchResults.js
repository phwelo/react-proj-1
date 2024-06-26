import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function SearchResults(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function Results() {
    return props.songs.map((song, index) => (
      <ListItem key={index}>
        <ListItemButton onClick={() => {
          props.viewSong({ song }) 
          props.handleClose()}}>
          <ListItemIcon>
            <MusicNoteIcon />
          </ListItemIcon>
          <ListItemText>{index} </ListItemText>
          <ListItemText>{song.song_name} </ListItemText>

          <ListItemText>{song.artist_name} </ListItemText>
          <ListItemText>{song.rating} </ListItemText>
        </ListItemButton>

        <Divider />
      </ListItem>
    ));
  }

  return (
    <Box
      sx={{
      overflow: "auto",
      maxHeight: "80vh"
        //   width: "100%",
      //   maxWidth: 360,
      //   maxHeight: 200,
      //   overflow: "auto",
      //   bgcolor: "background.paper",
      }}
    >
      <List sx={{maxHeight: "80vh", overflow: "scroll-vertical"}}>
        <Results></Results>
      </List>
    </Box>
  );
}

export default SearchResults;
