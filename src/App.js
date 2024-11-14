// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          </header>
          <div className="main-content">
            <Sidebar courses={courses} />
            <div className="section">
              <Routes>
                <Route path="/" element={<LearningPage setCourses={setCourses} />} />
                <Route path="/lecture/:lectureId" element={<LecturePage />} />
              </Routes>
            </div>
          </div>
            <div>
             <Compiler/>
            </div>
      </div>
    </Router>
  );
}

export default App;
