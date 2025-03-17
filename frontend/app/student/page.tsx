import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            layout="fixed"
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold">Student Name</h1>
            <p className="text-gray-700">student@example.com</p>
            <Link href="/student/edit-profile">
              Edit Profile
            </Link>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          Bio: Passionate learner and aspiring developer. Always eager to explore new technologies and improve my skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Enrolled Courses */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
          <p className="text-gray-700 mb-4">View and access your enrolled courses.</p>
          <Link href="/student/courses">
            Go to Courses
          </Link>
        </div>

        {/* Joined Courses */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Joined Courses</h2>
          <p className="text-gray-700 mb-4">View the courses you have joined.</p>
          <Link href="/student/joined-courses">
            Go to Joined Courses
          </Link>
        </div>

        {/* Other functionalities */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Other Functionalities</h2>
          <p className="text-gray-700 mb-4">Access other tools and resources.</p>
          <Link href="/student/other">
            Go to Other
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;