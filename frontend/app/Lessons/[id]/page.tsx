"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { lessonsData } from '@/data/data';
import { SideBar } from '@/components/SideBar';

const LessonPage = () => {
  const { id } = useParams();
  const lessonId = parseInt(id as string);

  // Find the lesson based on the lessonId
  let lesson;
  for (const course of lessonsData) {
    lesson = course.lessons.find((lesson) => lesson.id === lessonId);
    if (lesson) break;
  }

  // Check if lesson is available
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="flex flex-row p-4 gap-4 min-h-screen"> 
        <div className="max-h-fit">
        <SideBar/>
        </div>
        <div className="flex-grow mx-auto">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-lg mb-4">This is the content for {lesson.title}.</p>
      <iframe
        src={lesson.iframe}
        width="85%"
        height="600px"
        frameBorder="0"
        allowFullScreen
        className="mb-4"
      ></iframe>
      {/* Add more lesson content here */}
      <div className="flex items-center justify-center gap-4">
        <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-900">Previous Lesson</a>
        <a href="#" className="text-sm font-semibold text-gray-800 hover:text-gray-900">Next Lesson</a>
      </div>
      </div>
    </div>
  );
};

export default LessonPage;