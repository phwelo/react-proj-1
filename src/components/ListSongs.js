import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Pageview } from "@mui/icons-material";

function ListSongs(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return props.songs.map((song, index) => (
   
    <Accordion key={index} expanded={expanded === song.id} onChange={handleChange(song.id)}>
      <AccordionSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography align="left" sx={{ width: '33%', flexShrink: 0}}>
          {song.artist_name}
        </Typography>
        <Typography align="right" sx={{ marginLeft: "auto" }}>
          {song.song_name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
      {props.fromSearch ? 
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={()=> props.downloadSong(song)}><Pageview fontSize="small"/></Button>
      </ButtonGroup>
      :
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => {props.selectSong(song);}}><Pageview fontSize="small"/></Button>
        <Button variant="outlined"><EditIcon fontSize="small"/></Button>
        <Button variant="outlined"><DeleteForeverIcon fontSize="small"/></Button>
      </ButtonGroup>
      }
      </AccordionDetails>
    </Accordion>
  ));
}

export default ListSongs;
