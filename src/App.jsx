import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importing Pages
import Home from './pages/Home';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>

      {/* Main Application Container */}
      <div className="min-vh-100 d-flex flex-column bg-light text-dark">

        {/* Navbar */}
        <Navbar />

        {/* Breadcrumb */}
        <div className="bg-white border-bottom py-2 px-4 shadow-sm">
          <span className="text-danger small fw-semibold">
            Home
          </span>

          <span className="text-muted small">
            / Portal Navigation
          </span>
        </div>

        {/* Page Routing */}
        <div className="flex-grow-1">
          <Routes>

            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Students Page */}
            <Route path="/students" element={<Students />} />

            {/* Courses Page */}
            <Route path="/courses" element={<Courses />} />

            {/* Reports Page */}
            <Route path="/reports" element={<Reports />} />

          </Routes>
        </div>

        {/* Footer */}
        <Footer />

      </div>

    </Router>
  );
}

export default App;