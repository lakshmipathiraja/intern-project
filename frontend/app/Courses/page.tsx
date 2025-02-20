import React from 'react';
import Image from 'next/image';
import { coursesData } from '@/data/data';
import Link from 'next/link';
import CourseCard from '@/components/Home/Course/CourseCard';

function Course() {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200'>
      {/* Bounce ball */}
      <Image src="/images/cb.png" alt='image' width={800} height={800} className="absolute top-[30%] animate-bounce" />
      
      <div className='w-[80%] pt-8 pb-8 mx-auto'>
        <h1 className='text-4xl md:text-5xl text-gray-900 font-bold'>
          Courses
        </h1>
        
        {/* Courses */}
        <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
          {coursesData.map((course) => (
            <div key={course.id}>
              <Link href={`/Courses/${course.id}`}>
                <CourseCard course={course} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
