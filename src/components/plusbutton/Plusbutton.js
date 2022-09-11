import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { app } from 'utils/services';
import styles from 'components/plusbutton/scss/plusbutton.module.scss';

const Plusbutton = () => {

    const [ maximized, setMaximized ] = useState(false);
  
    const handleMaximizeToggle = () => {
      !maximized ? app.maximize() : app.unmaximize();
      setMaximized(!maximized);
    };
  
    return (
      <div className={styles.plus}><AddCircleOutlineIcon fontSize="large" /></div>
    );
  };

export default Plusbutton;