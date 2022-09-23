import React, { useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SearchBox from "./SearchBox";
import { get } from "utils/requests";
import SearchResults from "./SearchResults";
import CircularProgress from '@mui/material/CircularProgress';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const style = {
  position: "absolute",
  horizontalAlign: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  top: "10vh",
  width: "80vw",
  height: "80vh",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  backgroundColor: "rgba(0, 0, 0, 1)",
  p: 4,
};

const span1 = {
  marginLeft: "5px"
}

const fill = {
  width: "100%",
  height: "100%",
  margins: "0px",
  padding: "0px",
  backgroundColor: "rgba(0, 0, 0, 1)",
}

const buttons = {
  position: "absolute",
  right: "15px",
  top: "42px"
}

function TabBarToolBox(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchIsSearching, setSearchIsSearching] = React.useState(false);
  const [firstSearch, setFirstSearch] = React.useState(true);

  function handleSearchButton(query) {
    setSearchIsSearching(true);

    if (firstSearch == true) {
      setFirstSearch(false);
    }

    console.log("query is " + query);
    var path = "api/v1/search/" + query;

    setTimeout(
      () =>
        get(
          path, // Route
          (response) => {
            setSearchResults(response);
            setSearchIsSearching(false);
          }, // Response callback
          (error) => console.error(error) // Error callback
        ),
      3000
    );
  }

  useEffect(() => {
    console.log("search is searching", searchIsSearching.toString());
  }, [searchIsSearching]);

  useEffect(() => {
    console.log("search results", JSON.stringify(searchResults).toString());
  }, [searchResults]);

  function BasicModal() {
    return (
        <Modal
        style={style}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={fill}>
            <SearchBox
              sx={{ width: "100vw" }}
              handleSearchButton={handleSearchButton}
            />
            <Box style={fill}>
              {searchResults.length > 0 ? (
                <SearchResults  style={fill} songs={searchResults} viewSong={props.viewSong} handleClose={handleClose}></SearchResults>
              ) : (
                "Search for a song"
              )}
              {searchIsSearching? <CircularProgress/> : <></>}
            </Box>
          </Box>
        </Modal>
    );
  }

  return (
    <>
      <Box style={buttons}>
        <AddCircleOutlineIcon onClick={handleOpen} /><span style={span1}></span>
        <CloudDownloadIcon onClick={() => props.download(props.response)}></CloudDownloadIcon>
      </Box>
      <Box sx={{marginTop:"10px"}}>
        <BasicModal style={fill}></BasicModal>
      </Box>
    </>
  );
}

export default TabBarToolBox;
