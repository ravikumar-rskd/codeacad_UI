// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/dsa');
  };

  return (
    <div className="dsa" onClick={handleCardClick}>
      <h2>Data Structures & Algorithms</h2>
      <p>Learn the fundamentals of DSA to build efficient and scalable applications.</p>
    </div>
  );
}

export default Dashboard;
