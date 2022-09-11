import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ListSongs(props) {


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
        <Box>
        {props.fromSearch ? 
          <Button size="small" onClick={()=> props.downloadSong(song)}>Download</Button>
         : 
          <Button size="small">View</Button>
        }
      </Box>
        </CardActions>
      </Card>{" "}
    </ListItem>
  ));
}

export default ListSongs;
