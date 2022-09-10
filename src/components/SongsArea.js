import React, { useState } from "react";
import List from "@mui/material/List";
import ListSongs from "./ListSongs";
import Box from "@mui/material/Box";

import { get } from "utils/requests";

import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

function SongsArea(props) {

  const [searchResults, setSearchResults] = React.useState([]);
  const query = props.query
  function handleSearchButton() {
    console.log("query is " + query);
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

  if (props.songs.length > 0 && props.navTab == 0) {
    return (
      <List>
        <ListSongs songs={props.songs}></ListSongs>
      </List>
    );
  } else if (props.songs.length == 0 && props.navTab == 0) {
    return <Skeleton variant="rectangle"></Skeleton>;
  } else if (props.navTab == 1 && searchResults.length == 0) {
    return (
      <Box>
        <>Search the web for new tabs</>
        <Button onClick={() => handleSearchButton()}>Search</Button>
      </Box>
    );
  } else {
    return (
      <List style={{ maxHeight: 600, overflow: "auto", width: "100%" }}>
        <ListSongs songs={searchResults}></ListSongs>
      </List>
    );
  }
}

export default SongsArea;
