  // LecturePage.js
  import React from 'react';
  import { useNavigate, useParams } from 'react-router-dom';
  import { Typography, Box, Button } from '@mui/material';

  const LecturePage = () => {
    const { lectureId } = useParams();
    const navigate = useNavigate();

    // Function to handle navigation to Compiler page
    const handleNavigateToCompiler = () => {
      navigate('/compiler');
    };

    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          {lectureId.toUpperCase()} Course
        </Typography>
        <Typography variant="body1">
          Welcome to the {lectureId.toUpperCase()} course. This page includes lecture details and content for the selected course.
        </Typography>
        <div>
          <video
          width="100%"
          height="auto"
          controls
          style={{ borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Button onClick={handleNavigateToCompiler}>Practice</Button>
        </div>
      </Box>
    );
  };

  export default LecturePage;
