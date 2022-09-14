import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TabBox from "components/TabBox";
import SongsArea from "./SongsArea";
import { get } from "utils/requests";
import TabBoxToolBar from "./TabBarToolBox";

function MainComponent(props) {
  const [response, setResponse] = useState([]);
  const [selectedTabLoading, setSelectedTabLoading] = React.useState(false);
  const [selectedSong, setSelectedSong] = React.useState("");

  useEffect(() => {
    if (!selectedSong.id == "") {
      console.log("selected song is " + selectedSong.id.toString());
      loadSong(selectedSong);
    } else {
      console.log("hit");
    }
  }, [selectedSong]);

  function loadSong(song) {
    setSelectedTabLoading(true);
    console.log("getting song id " + song.toString());
    var path = "api/v1/song/" + song.id.toString();

    setTimeout(
      () =>
        get(
          path, // Route
          (response) => {
            setResponse(response);
            setSelectedTabLoading(false);
          }, // Response callback
          (error) => console.error(error) // Error callback
        ),
      3000
    );
  }

  function downloadSong(song) {
    setSelectedTabLoading(true);

    var path = "api/v1/download/" + song.tab_url.toString();
    console.log("path" + path);

    setTimeout(
      () =>
        get(
          path, // Route
          (response) => setResponse(response), // Response callback
          (error) => console.error(error) // Error callback
        ),
      3000
    );
    setSelectedTabLoading(false);
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
          }}
        >
          <SongsArea songs={props.songs} selectSong={setSelectedSong} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flex: 4}}>

        <TabBoxToolBar loadSong={loadSong} selectedSong = {selectedSong} />
     

        <TabBox song={response} selectedTabLoading={selectedTabLoading} />
      </Box>
    </Box>
  );
}

export default MainComponent;
