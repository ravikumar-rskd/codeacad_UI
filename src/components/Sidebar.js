import { Typography } from '@mui/material';
import React from 'react';

const Sidebar = () =>{
    const courses=['Python','Java','C'];
return (
    <div className="sidebar">
        <Typography>
            Courses
        </Typography>
        <ul>
            {courses.map((title,index)=>(
                <a href='#' key={index}>{title}<span>&#8594;</span></a>
            ))}
            {/* <li>Dashboard</li>
            <li>My Learning</li>
            <li>Events</li>
            <li>Projects</li>
            <li>Workspaces</li> */}
        </ul>
    </div>
);
};

export default Sidebar;
