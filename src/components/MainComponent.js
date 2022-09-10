import React, { useState } from "react";
import Box from "@mui/material/Box";
import TabBox from "components/TabBox";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BottomBar from "./BottomBar";
import SearchBox from "./SearchBox";
import SongsArea from "./SongsArea";

function MainComponent(props) {
  const [response, setResponse] = useState([]);
  const [navTab, setNavTab] = React.useState(0);    
  const [query, setQuery] = React.useState(" ");
    
  const handleTextBoxChange = (value) => {
      setQuery(value);
      console.log(query);
    };

  function handleChange(event, newValue) {
    setNavTab(newValue);
    console.log(newValue);
  }

  return (
    <Box >
      <Box >
        <Box >
        <SearchBox onChange={(value => handleTextBoxChange(value))} query={props.query}/>
          <Tabs value={navTab} onChange={handleChange}>
            <Tab label="My Library" />
            <Tab label="Search" />
          </Tabs>

        </Box>
        <SongsArea songs ={props.songs} navTab={navTab} query ={props.query}/>
        <Box>
          <BottomBar></BottomBar>
        </Box>
      </Box>
      <Box>
        <TabBox song={response}></TabBox>
      </Box>
    </Box>
  );
}

export default MainComponent;
