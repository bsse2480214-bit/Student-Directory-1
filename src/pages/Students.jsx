
import React from 'react';


// Importing StudentCard component
import StudentCard from '../components/StudentCard';

// Importing Student Form component
import StudentForm from '../components/StudentForm';


const Students = () => {

  // Student data
  const students = [
    {
      id: "101",
      name: "Farhan Aman",
      major: "Computer Science",
      year: "2",
      gpa: "3.4"
    },
    {
      id: "102",
      name: "Khizran Zubair",
      major: "Software Eng.",
      year: "2",
      gpa: "3.6"
    },
    {
      id: "103",
      name: "Muhammad Hussain",
      major: "Data Science",
      year: "3",
      gpa: "2.9"
    },
    {
      id: "104",
      name: "Sufiyan Saleem",
      major: "Cyber Security",
      year: "1",
      gpa: "3.2"
    }
  ];

  return (
    <div className="container py-4">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="fw-bold text-dark mb-0">
          Student Directory
        </h2>

        <button className="btn btn-danger btn-sm fw-semibold">
          + Add New Student
        </button>

      </div>

      {/* Student Cards */}
      <div className="row g-4 mb-4">

        {students.map((student) => (

          <div className="col-md-3" key={student.id}>

            <StudentCard {...student} />

          </div>

        ))}

      </div>

      {/* Success Alert */}
      <div className="alert alert-danger py-2 small text-center">
        Student records have been successfully updated.
      </div>

      {/* Student Registration Form */}
      <StudentForm />

    </div>
  );
};

export default Students;
