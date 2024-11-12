// LecturePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const LecturePage = () => {
  const { lectureId } = useParams();

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Lecture Content for Lecture ID: {lectureId}
      </Typography>
      <Typography variant="body1">
        This page contains the details and content of the lecture with ID: {lectureId}. 
        Here you can add paragraphs, images, or any additional resources for this lecture.
      </Typography>
    </Box>
  );
};

export default LecturePage;
