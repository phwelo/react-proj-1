// import React, {  useEffect, useState } from "react";
import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Skeletons = <><Skeleton /><Skeleton /><Skeleton /><br /></>;

const SongSeedData = [
    {
      "artist_name": 
      <Box sx={{ width: 300 }}>
      {Skeletons}
      {Skeletons}
      {Skeletons}
      {Skeletons}
      {Skeletons}
      {Skeletons}
      {Skeletons}
      {Skeletons}
    </Box>
    },
  ]
  
  export default SongSeedData