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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

function MainComponent(props) {
  const [response, setResponse] = useState([]);
  const [value, setValue] = React.useState(0);
  const [selectedTabLoading, setSelectedTabLoading] = React.useState(false);
  const [query, setQuery] = React.useState(" ");
  const [searchResults, setSearchResults] = React.useState([])

  function ListSongs({ songs }) {

    
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

  function SearchBox() {
    return (
      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          color="success"
          onChange={
            handleTextBoxChange
          }
          value={query}
          focused
        />
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

  function handleChange(event, newValue) {
    setValue(newValue);
    console.log(newValue);
  }

  const handleTextBoxChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  function handleSearchButton() {
    console.log("query is " + query)
    var path = "api/v1/search/" + query;

    setTimeout(
      () =>
        get(
          path, // Route
          (response) => setSearchResults(response), // Response callback
          (error) => console.error(error) // Error callback
        ),
      3000
    );

  }

  function SongsArea() {
    if (props.songs.length > 0 && value == 0) {
      return (
        <List>
          <ListSongs songs={props.songs}></ListSongs>
        </List>
      );
    } else if (props.songs.length == 0 && value == 0) {
      return <Skeleton variant="rectangle"></Skeleton>;
    } else if (value == 1 && searchResults.length == 0) {
      return (
        <Box>
           <>Search the web for new tabs</>
          <Button onClick={() => handleSearchButton()} >
            Search
          </Button>
          </Box>)}
          
      else {
            return (
              <List style={{ maxHeight: 600, overflow: "auto", width: "100%" }}>
              <ListSongs songs={searchResults}></ListSongs>
            </List>
            )
          }
        
  }

  return (
    <Box className={styles.main_container}>
      <Box className={styles.sidebar}>
        <Box className={styles.sidebar_top_container}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="My Library" />
            <Tab label="Search" />
          </Tabs>
          <SearchBox />
        </Box>
        <SongsArea></SongsArea>

        <Box className={styles.bottom_bar_container}>
          <BottomBar></BottomBar>
        </Box>
      </Box>
      <Box className={styles.tab_box}>
        <TabBox song={response} loading={selectedTabLoading}></TabBox>
      </Box>
    </Box>
  );
}

export default MainComponent;
