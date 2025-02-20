import Link from 'next/link';  // Import the Link component
import { useRouter, useParams } from 'next/navigation';  // Import useRouter and useParams for dynamic routing
import { lessonsData } from '@/data/data';  // Import lessonsData from the data file
import Course from './Home/Course/Course';

export const SideBar = () => {
  const router = useRouter();  // For dynamic routing
  const { id } = useParams();  // Get course ID from URL

  // Find lessons for the current course based on the courseId
  const courseLessons = lessonsData.find(item => item.courseId === parseInt(id as string));

  // Check if courseLessons is available
  if (!courseLessons) {
    return <div>Loading...</div>;  // Loading state if lessons are not found
  }

  return (
    <div className="bg-gray-800 text-white p-4 w-64">
      <h2 className="text-2xl font-bold mb-6">Lessons</h2>
      <ul className="space-y-4">
        {courseLessons.lessons.map((lesson) => (
          <li key={lesson.id}>
            {/* Use the Link component directl.y without <a> tag */}
            <Link href={`/Courses/${Courses.id}/Lessons/${Lesson.id}`} className="hover:text-gray-400 text-lg">
              {lesson.title}
            </Link>
            <div className="border-b-2 pt-5 border-white"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};