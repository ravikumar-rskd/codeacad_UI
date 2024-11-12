// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LearningPage from './components/LearningPage';
import Sidebar from './components/Sidebar';
import LecturePage from './components/LecturePage'; // New component for lecture content

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <div className="main-content">
            <Sidebar />
            <div className="section">
              <Routes>
                {/* Route to LearningPage */}
                <Route path="/" element={<LearningPage />} />
                {/* Route to LecturePage for specific lectures */}
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
