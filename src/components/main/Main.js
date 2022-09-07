import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { get } from "utils/requests";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import TabBox from "components/tabbox/TabBox";
import styles from "components/main/Main.module.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Main(props) {
  const [response, setResponse] = useState([]);

  function ListSongs({ songs }) {
    function loadSong(song) {
      console.log("getting song id " + song.id.toString());
      var path = "api/v1/song/163955-12085";

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
        style={{ maxHeight: 200, overflow: "auto"}}
        onClick={loadSong(song)}
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
    </Card>
        {" "}
      </ListItem>
    ));
  }

  function SearchBox() {
    return (
      <Box component="form" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color="success" focused />
      </Box>
    );
  }

  function BottomBar() {
    return (
      <div className={styles.bottom_bar}>
        <ShareIcon></ShareIcon>
        <EditIcon></EditIcon>
        <DeleteIcon></DeleteIcon>
        <SaveIcon></SaveIcon> 
      </div>
    );
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_top_container}>
          <SearchBox />
        </div>

        {props.songs.length > 0 ? (
          <>
            <List>
              <ListSongs songs={props.songs}></ListSongs>
            </List>
          </>
        ) : (
          <>loading</>
        )}
        <div className={styles.bottom_bar_container}>
          <BottomBar></BottomBar>
        </div>
      </div>
      <div className={styles.tab_box}>
        <TabBox song={response}></TabBox>
      </div>
    </div>
  );
}

export default Main;
