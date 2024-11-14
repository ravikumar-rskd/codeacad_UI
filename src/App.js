// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LearningPage from './components/LearningPage';
import Sidebar from './components/Sidebar';
import LecturePage from './components/LecturePage';
import Compiler from './components/Compiler';

function App() {
  // State to store selected courses and lectures
  const [courses, setCourses] = useState([
    'Python',
    'Java',
    'C',
  ]);

  // Use location to check the current path
  const location = useLocation();

  // Check if the current path is for the Compiler component
  const isCompilerPage = location.pathname === '/compiler';

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="main-content">
        {/* Conditionally render Sidebar and main section based on route */}
        {!isCompilerPage && <Sidebar courses={courses} />}
        <div className="section">
          <Routes>
            <Route path="/" element={<LearningPage setCourses={setCourses} />} />
            <Route path="/lecture/:lectureId" element={<LecturePage />} />
            <Route path="/compiler" element={<Compiler />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App/>
    </Router>
  );
}
