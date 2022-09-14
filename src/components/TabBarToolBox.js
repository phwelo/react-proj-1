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
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={style}>
            <SearchBox
              sx={{ width: "100%" }}
              handleSearchButton={handleSearchButton}
            />
            <Box sx={{height: 300, width: "100%"}}>
              {searchResults.length > 0 ? (
                <SearchResults songs={searchResults} loadSong={props.loadSong} handleClose={handleClose}></SearchResults>
              ) : (
                <>Search for a song</>
              )}
              {searchIsSearching? <CircularProgress/> : <></>}
            </Box>
          </Box>
        </Modal>
    );
  }

  return (
    <Box sx= {{display: "flex" , flexDirection: "row", justifyContent: "flex-end"}}>
      <AddCircleOutlineIcon onClick={handleOpen} />
      {!props.selectedSong === "" ? <CloudDownloadIcon onClick={() => alert("download")}></CloudDownloadIcon> : null }
      <BasicModal></BasicModal>
    </Box>
  );
}

export default TabBarToolBox;
