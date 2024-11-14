// Sidebar.js
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ courses }) => {
  return (
    <div className="sidebar">
      <Typography variant="h6">Courses</Typography>
      <ul>
        {courses.map((title, index) => (
          <li key={index}>
            <Link to={`/lecture/${title.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              {title} <span>&#8594;</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
