import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import FindInternships from './pages/FindInternships';
import StudentDashboard from './pages/StudentDashboard';
import SavedInternships from './pages/SavedInternships';
import MyApplications from './pages/MyApplications';
import ProfilePage from './pages/ProfilePage';

function App() {
  // This should be determined by your authentication logic
  const isLoggedIn = true; // For demonstration purposes

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-dashboard/profile" element={<ProfilePage />} />
        <Route path="/find-internships" element={<FindInternships isLoggedIn={isLoggedIn} />} />
        <Route path="/student-dashboard/saved-internships" element={<SavedInternships />} />
        <Route path="/student-dashboard/my-applications" element={<MyApplications />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
