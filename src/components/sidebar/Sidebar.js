import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { get } from "utils/requests";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';




function Sidebar(props) {

  const [response, setResponse] = useState([]);

  function ListSongs({songs}) {


  
  
    function loadSong(song) {
      console.log("getting song id " + song.id.toString() )
      var path = 'api/v1/song/163955-12085'
  
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
    
  
    {console.log("songs")}
    return(songs.map((song) => <div onClick={() => loadSong(song) }><ListItem onClick={loadSong(song)} key={song.id}>{song.song_name} </ListItem></div>))
    
  }
  
  function SearchBox() {
    return(
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  
      </Box>
    )
  }
  
  function BottomBar() {
    return (
      <>
          <ShareIcon></ShareIcon>
      <EditIcon></EditIcon>
      <DeleteIcon></DeleteIcon>
      <SaveIcon></SaveIcon>
      </>
  
    )
  }



  {console.log(props.songs)}
  return (

    <>
  <SearchBox></SearchBox>
      {props.songs.length > 0 ? (
        <>
        <List>
          <ListSongs songs={props.songs}></ListSongs>
          <BottomBar></BottomBar>
        </List>
        <div>
          {JSON.stringify(response)}
          </div>
          </>
      ) : (
        <>what</>
      )}
    </>
  );
}

export default Sidebar;
