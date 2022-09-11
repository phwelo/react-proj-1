import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Delete from "@mui/icons-material/Delete";
import { Pageview } from "@mui/icons-material";

function ListSongs(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return props.songs.map((song, index) => (
    <div>
    <Accordion key={index} expanded={expanded === song.song_name} onChange={handleChange(song.song_name)}>
      <AccordionSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {song.artist_name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {song.song_name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => {props.selectSong(song);}}><Pageview fontSize="small"/></Button>
          <Button variant="outlined"><EditIcon fontSize="small"/></Button>
          <Button variant="outlined"><DeleteForeverIcon fontSize="small"/></Button>
        </ButtonGroup>
      </AccordionDetails>
    </Accordion>
    </div>
    // <ListItem
    //   key={index}
    //   style={{ maxHeight: 200, overflow: "auto" }}
    //   onClick={() => {props.selectSong(song);}}
    // >
    //   <Card sx={{ minWidth: 275 }}>
    //     <CardContent>
    //       <Typography variant="h6" component="div">
    //         {song.song_name}
    //       </Typography>
    //       <Typography variant="h5" component="div">
    //         {song.artist_name}
    //       </Typography>
    //       <Typography variant="body1" component="div">
    //         {song.rating + " rating"}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //     <Box>
    //     {props.fromSearch ? 
    //       <Button size="small" onClick={()=> props.downloadSong(song)}>Download</Button>
    //      : 
    //       <Button size="small">View</Button>
    //     }
    //   </Box>
    //     </CardActions>
    //   </Card>{" "}
    // </ListItem>
  ));
}

export default ListSongs;
