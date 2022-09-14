import React, { useEffect, useState } from "react";
import { get } from "utils/requests";
import Titlebar from "components/titlebar/Titlebar";
import styles from "components/App.module.scss";
import MainComponent from "./MainComponent";

function App() {


  return (
    <div className={styles.app}>
      <Titlebar />
      <MainComponent />
    </div>
  );
}

export default App;
