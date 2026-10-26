import React from 'react';
import StudentCard from '../components/StudentCard';

const Students = () => {
  const students = [
    { id: "101", name: "Farhan Aman", major: "Computer Science", year: "2", gpa: "3.4" },
    { id: "102", name: "Khizran Zubair", major: "Software Eng.", year: "2", gpa: "3.6" },
    { id: "103", name: "Muhammad Hussain", major: "Data Science", year: "3", gpa: "2.9" },
    { id: "104", name: "Sufiyan Saleem", major: "Cyber Security", year: "1", gpa: "3.2" }
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark mb-0">Student Directory</h2>
        <button className="btn btn-danger btn-sm fw-semibold">+ Add New Student</button>
      </div>

      <div className="row g-4 mb-4">
        {students.map((student) => (
          <div className="col-md-3" key={student.id}>
            <StudentCard {...student} />
          </div>
        ))}
      </div>

      <div className="alert alert-danger py-2 small text-center" role="alert">
        Student records have been successfully updated.
      </div>
    </div>
  );
};

export default Students;