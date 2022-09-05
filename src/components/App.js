import React, {  useEffect, useState } from "react";
import { get } from "utils/requests";
import Titlebar from "components/titlebar/Titlebar";
import "react-pro-sidebar/dist/css/styles.css";
import styles from "components/App.module.scss";
import SongSeedData from 'SongSeedData'
import { CssVarsProvider } from '@mui/joy/styles';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { slide as Sidebar } from 'react-burger-menu'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    /**
     * Example call to Flask
     * @see /src/utils/requests.js
     * @see /py/crud.py
     */
    setTimeout(
      () =>
        get(
          "/api/v1/songs", // Route
          (response) => setResponse(response), // Response callback
          (error) => console.error(error) // Error callback
        ),
      3000
    );
  }, []);

  function Hello(strthing) {
    console.dir(strthing)
    return <Button variant="outlined">Activate Menu</Button>
  }

  useEffect(() => {
    setResponse(SongSeedData)
  }, []);

  const listItems = response.map((song) =>
    <ListItem key={song.id} onClick={() => Hello(song.id)}>
      {song.song_name} - {song.artist_name}
    </ListItem>
  );

  const songList = <List className={styles.main}>
      <h1 key="na" className={styles.songheader}>Songs</h1>
      <Divider />
      {listItems}
    </List>

  return (
    <>
        <div className={styles.app}>
          <Titlebar/>
          <Sidebar isOpen={ true }>
            {songList}
          </Sidebar>
          <Hello/>
        </div>
    </>
  );
}

export default App;
