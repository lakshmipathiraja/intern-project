import React from 'react';
import Link from 'next/link';

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Manage Courses */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
          <p className="text-gray-700 mb-4">Create, update, and delete courses.</p>
          <Link href="/teacher/courses">
            Go to Courses
          </Link>
        </div>

        {/* View Students */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">View Students</h2>
          <p className="text-gray-700 mb-4">View and manage student information.</p>
          <Link href="/teacher/students">
            Go to Students
          </Link>
        </div>

        {/* Other functionalities */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Other Functionalities</h2>
          <p className="text-gray-700 mb-4">Access other functionalities and tools.</p>
          <Link href="/teacher/other">
            Go to Other
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;