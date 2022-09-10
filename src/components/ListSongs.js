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
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {song.song_name}
          </Typography>
          <Typography variant="h5" component="div">
            {song.artist_name}
          </Typography>
          <Typography variant="body1" component="div">
            {song.rating + " rating"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
      </Card>{" "}

    </ListItem>
  ));
}

export default ListSongs;
