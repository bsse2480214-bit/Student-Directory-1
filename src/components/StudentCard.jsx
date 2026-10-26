
import React, { useState } from 'react';

const StudentCard = ({ id, name, major, year, gpa, email, phone }) => {

  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleViewProfile = () => {
    if (!showDetails) {
      setViews(prev => prev + 1);
    }

    setShowDetails(prev => !prev);
  };

  return (
    <div className="card h-100 shadow-sm border bg-white p-2">
      <div className="card-body d-flex flex-column">

        <h5 className="card-title fw-bold text-dark">
          {name}
        </h5>

        <p className="card-text mb-1 text-muted small">
          ID: {id}
        </p>

        <p className="card-text mb-1 text-muted small">
          Major: {major}
        </p>

        <p className="card-text mb-1 text-muted small">
          Year: {year}
        </p>

        <p className="card-text mb-2 text-muted small">
          GPA: {gpa}
        </p>

        {/* Student Details */}
        {showDetails && (
          <div className="mb-3 p-2 bg-light rounded border">
            <p className="mb-1 text-dark small">
              ✉️ {email || 'No email available'}
            </p>

            <p className="mb-0 text-dark small">
              📞 {phone || 'No phone available'}
            </p>
          </div>
        )}

        {/* View Counter */}
        <div className="mb-2">
          <span className="badge bg-secondary text-white">
            Views: {views}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-auto d-flex gap-2 justify-content-between">

          <button
            type="button"
            className={`btn btn-sm px-3 ${
              showDetails
                ? 'btn-outline-danger'
                : 'btn-outline-primary'
            }`}
            onClick={handleViewProfile}
          >
            {showDetails ? 'Hide Profile' : 'View Profile'}
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm px-3"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default StudentCard;
