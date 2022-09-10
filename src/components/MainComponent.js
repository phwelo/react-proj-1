import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TabBox from "components/TabBox";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BottomBar from "./BottomBar";
import SearchBox from "./SearchBox";
import SongsArea from "./SongsArea";
import { get } from "utils/requests";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function MainComponent(props) {
  const [response, setResponse] = useState([]);
  const [navTab, setNavTab] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [selectedTabLoading, setSelectedTabLoading] = React.useState(false);
  const [searchIsSearching, setSearchIsSearching] = React.useState(false)
  const [selectedSong, setSelectedSong] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    if (!selectedSong.id == "") {
      console.log("selected song is " + selectedSong.id.toString());
      loadSong(selectedSong)
    } else {
      console.log("hit");
    }
  }, [selectedSong]);

  useEffect(() => {
    console.log('search is searching' , searchIsSearching.toString())
  }, [searchIsSearching])

  useEffect(() => {
    console.log('search results' , searchResults.toString())
  }, [searchResults])

  const handleTextBoxChange = (value) => {
    setQuery(value);
    console.log(query);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function handleChange(event, newValue) {
    setNavTab(newValue);
    console.log(newValue);
  }

  function handleSearchButton() {
    setSearchIsSearching(true)
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
    
    setSearchIsSearching(false)

  }


  function loadSong(song) {
    setSelectedTabLoading(true);
    console.log("getting song id " + song.toString());
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

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        mt: 10,
        p: 1,
      }}
    >
      <Box sx={{ display: "flex", flex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <SearchBox
              fullWidth
              onChange={(value) => handleTextBoxChange(value)}
              query={props.query}
              sx={{ width: "100%" }}
              handleSearchButton = {handleSearchButton}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Tabs value={navTab} onChange={handleChange} variant="fullWidth">
              <Tab label="My Library" />
              <Tab label="Search" />
            </Tabs>
          </Box>

          <Box sx={{ flex: 3 }}>
            <SongsArea
              songs={props.songs}
              navTab={navTab}
              query={props.query}
              searchResults = {searchResults}
              selectSong = {setSelectedSong}
              searchIsSearching = {searchIsSearching}
            />
          </Box>

          <Box sx={{ justifyContent: "flex-end", flex: 1 }}>
            <BottomBar />
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: 4 }}>
        <TabBox song={response} />
      </Box>
    </Box>
  );
}

export default MainComponent;
