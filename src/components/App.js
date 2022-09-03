import React, {  useEffect, useState } from "react";
import { get } from "utils/requests";
import Titlebar from "components/titlebar/Titlebar";
import "react-pro-sidebar/dist/css/styles.css";
import styles from "components/App.module.scss";
import Sidebar from "./sidebar/Sidebar";
import SongSeedData from 'SongSeedData'
import 'semantic-ui-css/semantic.min.css'
import { List, Button, Divider, Input, Segment, Container } from 'semantic-ui-react'

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

  useEffect(() => {
    setResponse(SongSeedData)
  }, []);

  const listItems = response.map((song) =>
  <a href={`api/v1/song/${song.id}`}>
    <Segment>
      <List.Item key={song.id}>
        <List.Icon name='music' />
        <List.Content>
          <List.Header>{song.song_name}</List.Header>
          <List.Description>{song.artist_name} - id: {song.id}</List.Description>
        </List.Content>
      </List.Item>
    </Segment>
  </a>
  );
  
  return (
    <>
      <Titlebar />
      <Sidebar/>
      <div className={styles.app}>
        
        
        <div className={styles.listdiv}>

            <Segment.Group stacked>{listItems}</Segment.Group>

        </div>
      </div>
    </>
  );
}

export default App;
