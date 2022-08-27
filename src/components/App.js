import React, { Fragment, useEffect, useState } from 'react';
import { get } from 'utils/requests';

import { Counter } from 'components/counter/Counter';
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
          {JSON.stringify(response)}
          <Counter />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <span>
            <span>Fart </span>
            <a
              className={ styles['app-link'] }
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className={ styles['app-link'] }
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className={ styles['app-link'] }
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,
            <span> and </span>
            <a
              className={ styles['app-link'] }
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
