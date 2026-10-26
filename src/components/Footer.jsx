import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <h6 className="text-danger fw-bold mb-3">Links</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li><Link to="/" className="text-light text-decoration-none">Dashboard / Home</Link></li>
              <li><Link to="/students" className="text-light text-decoration-none">Student Directory</Link></li>
              <li><Link to="/courses" className="text-light text-decoration-none">Courses</Link></li>
              <li><Link to="/reports" className="text-light text-decoration-none">Reports</Link></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h6 className="text-danger fw-bold mb-3">Contact Info</h6>
            <p className="small text-light mb-1">SZABIST Student Portal Support</p>
            <p className="small text-light mb-1">📞 +92: 123 456 7890</p>
            <p className="small text-light mb-0">✉️ khizi@studentportal.com</p>
          </div>
        </div>
        <hr className="border-secondary my-3" />
        <p className="text-center text-light small mb-0">
          © 2026 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
<div class="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div class="card-body">
    <h4 className="card-title">Special title treatment</h4>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn-solid theme-primary mx-auto">Go somewhere</a>
  </div>
  <div className="card-footer fg-2">
    2 days ago
  </div>
</div>

export default Footer;
