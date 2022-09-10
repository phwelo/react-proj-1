import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ListSongs(props) {


  console.log(props.songs[1]);
  return props.songs.map((song, index) => (
    <ListItem
      key={index}
      style={{ maxHeight: 200, overflow: "auto" }}
      onClick={() => {
        props.selectSong(song);
      }}
    >

    </ListItem>
  ));
}

export default ListSongs;
