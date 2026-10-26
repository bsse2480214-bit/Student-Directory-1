import React from 'react';
import StudentForm from '../components/StudentForm';

const Courses = () => {
  return (
    <div className="container py-4">
      <h2 className="fw-bold text-dark mb-3">Courses List</h2>
      <p className="text-muted">Here you can view all enrolled software engineering and computer science courses.</p>
       <StudentForm />
    </div>
   

  );
};
  
export default Courses;