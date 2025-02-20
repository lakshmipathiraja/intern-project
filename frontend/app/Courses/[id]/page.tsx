'use client';  // If you're using client-side code, mark it with this directive
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // For getting route parameters
import { coursesData } from '@/data/data';  // Assuming you have your course data stored here
import { SideBar } from '@/components/SideBar';
 // Import the Sidebar component
interface Course {
  id: number;
  image: string;
  title: string;
  author: string;
  reviewNumber: number;
  lessons: number;
  students: number;
  category: string;
  description: string;
  difficulty: string;
  duration: string;
  prerequisites: string;
}

const CourseDetails = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();  // Get the course id from the URL

  useEffect(() => {
    if (id) {
      const foundCourse = coursesData.find(course => course.id === parseInt(id as string));
      setCourse(foundCourse || null);
      setLoading(false);  // Set loading state to false once data is fetched
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="  bg-gray-100 flex flex-row">
      <SideBar/>
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <img src={course.image} alt={course.title} className="w-full rounded-lg shadow-lg" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-gray-600 mt-2">{course.category} | By {course.author}</p>

        {/* Course Description */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
          <p className="text-gray-700 mt-2">{course.description}</p>
        </section>

        {/* Course Information */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Lessons</h3>
            <p className="text-gray-600">{course.lessons} lessons</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Students Enrolled</h3>
            <p className="text-gray-600">{course.students} students</p>
          </div>
        </section>

        {/* Additional Details */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Difficulty</h3>
            <p className="text-gray-600">{course.difficulty}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Duration</h3>
            <p className="text-gray-600">{course.duration}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Prerequisites</h3>
            <p className="text-gray-600">{course.prerequisites}</p>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500">
              {'⭐'.repeat(Math.round(course.reviewNumber / 100))}
            </span>
            <span className="text-gray-600 ml-2">({course.reviewNumber} reviews)</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
