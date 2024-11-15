// App.js
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LearningPage from './components/LearningPage';
import Sidebar from './components/Sidebar';
import LecturePage from './components/LecturePage';
import Compiler from './components/Compiler';
import Dashboard from './components/Dashboard';

function App() {
  // Default list of courses for the Sidebar
  const defaultCourses = useMemo(() => ['DSA', 'Python', 'Java', 'C'], []);
  const [courses, setCourses] = useState(defaultCourses);

  const location = useLocation();
  const isCompilerPage = location.pathname === '/compiler';

  // Reset courses to default when navigating back to Dashboard
    // Reset courses to default when navigating back to Dashboard
  useEffect(() => {
    if (location.pathname === "/") {
      setCourses(defaultCourses);
    }
  }, [location.pathname, defaultCourses]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="main-content">
        {!isCompilerPage && <Sidebar courses={courses} />}
        <div className="section">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dsa" element={<LearningPage setCourses={setCourses} />} />
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
      <App />
    </Router>
  );
}
