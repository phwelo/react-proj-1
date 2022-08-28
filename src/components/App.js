import React, { Fragment, useEffect, useState } from 'react';
import { get } from 'utils/requests';

import Titlebar from 'components/titlebar/Titlebar';

import styles from 'components/App.module.scss';

function App() {

  const [response, setResponse] = useState('')

  useEffect(() => {

    /**
     * Example call to Flask
     * @see /src/utils/requests.js
     * @see /py/crud.py
     */
    setTimeout(() => get(
      'api/v1/songs', // Route
      (response) => setResponse(response), // Response callback
      (error) => console.error(error) // Error callback
    ), 3000);
  }, []);

  return (
    <Fragment>
      <Titlebar />

      <div className={ styles.app }>
        <header className={ styles['app-header'] }>
          /api/v1/songs
          <p>
            {JSON.stringify(response)}
          </p>
          <p>
            <a href="https://github.com/santomegonzalo/react-electron-titlebar">seems like a nice title bar</a><br/>
            <a href="https://www.npmjs.com/package/react-pro-sidebar">sidebar idea</a><br/>
            <a href="https://fortunar.github.io/react-sidemenu/#item3">if flexibility is needed in sidebar</a><br/>
            <a href="https://uptick.github.io/react-keyed-file-browser/">file browser widget</a><br/>
            <a href="https://react-ui.io/components/popover">popover can be used to display chord fingerings</a><br/>
            <a href="https://github.com/aliustaoglu/react-js-guitar-chords#readme">get chord fingerings</a><br/>

          </p>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
