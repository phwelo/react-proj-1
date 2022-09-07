import React, { useEffect, useState } from "react";
import { get } from "utils/requests";
import Titlebar from "components/titlebar/Titlebar";
import styles from "components/App.module.scss";
import Main from "./main/Main";

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
          "api/v1/songs", // Route
          (response) => setResponse(response), // Response callback
          (error) => console.error(error) // Error callback
        ),
      3000
    );
  }, []);

  useEffect(() => {
    setResponse(response);
  }, []);

  return (
    <>
      <div className={styles.app}>
        <Titlebar />
        <Main songs={response} />
      </div>
    </>
  );
}

export default App;
