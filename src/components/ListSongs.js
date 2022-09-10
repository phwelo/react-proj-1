import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { get } from "utils/requests";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ListSongs({ songs }) {

    const [selectedTabLoading, setSelectedTabLoading] = React.useState(false);
    const [response, setResponse] = useState([]);

    async function loadSong(song) {
      setSelectedTabLoading(true);
      console.log("getting song id " + song.id.toString());
      var path = "api/v1/song/" + song.id.toString();

      setTimeout(
        () =>
          get(
            path, // Route
            (response) => setResponse(response), // Response callback
            (error) => console.error(error) // Error callback
          ),
        3000
      );
    }

    return songs.map((song) => (
      <ListItem
        key={song.id}
        style={{ maxHeight: 200, overflow: "auto" }}
        onClick={() => {
          loadSong(song);
        }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {song.song_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        </Card>{" "}
      </ListItem>
    ));
  }

  export default ListSongs