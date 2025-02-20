// components/Course.js
import React from 'react';
import Link from 'next/link'; // No need to wrap in <a> anymore
import { coursesData } from '@/data/data';
import CourseCard from '@/components/Home/Course/CourseCard';
import Image from 'next/image';

function Course() {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200'>
       {/* Bounce ball */}
      <Image src="/images/cb.png" alt='image' width={800} height={800} className="absolute top-[30%] animate-bounce" />
      <div className='w-[80%] pt-8 pb-8 mx-auto'>
        <h1 className='text-4xl md:text-5xl text-gray-900 font-bold'>
         Popular Courses
        </h1>
        <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
          {coursesData.slice(0, 6).map((course) => (  // Slice to limit to 6 items
            <div key={course.id}>
              {/* Link component without the <a> tag */}
              <Link href={`/course/${course.id}`}>
                <CourseCard course={course} /> {/* You can directly wrap your CourseCard */}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-16'> {/* Add margin-top to push the sidebar down */}
        {/* Sidebar content goes here */}
      </div>
    </div>
  );
}

export default Course;
