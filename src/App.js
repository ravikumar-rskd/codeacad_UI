// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LearningPage from './components/LearningPage';
import Sidebar from './components/Sidebar';
import LecturePage from './components/LecturePage';

function App() {
  // State to store selected courses and lectures
  const [courses, setCourses] = useState([
    'Python',
    'Java',
    'C',
  ]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <div className="main-content">
            <Sidebar courses={courses} />
            <div className="section">
              <Routes>
                <Route path="/" element={<LearningPage setCourses={setCourses} />} />
                <Route path="/lecture/:lectureId" element={<LecturePage />} />
              </Routes>
            </div>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
