import React, {  useEffect, useState } from "react";
import { get } from "utils/requests";
import Titlebar from "components/titlebar/Titlebar";
import "react-pro-sidebar/dist/css/styles.css";
import styles from "components/App.module.scss";
import Sidebar from "./sidebar/Sidebar";
import SongSeedData from 'SongSeedData'

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
    <li key={song.id}>{song.song_name}</li>
  );


  return (
    <>
      
      <div className={styles.app}>
      <Titlebar/>
      <Sidebar />
      < div className={styles.main}>
      <ul>{listItems}</ul>
      </div >

      
      </div>
    </>
  );
}

export default App;
