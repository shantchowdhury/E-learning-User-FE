import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import CourseCard from '../../components/CourseDetails/CourseCard';
import { useSelector } from 'react-redux';
import Link from 'next/link';

function HomeCourses() {
  const {courses}=useSelector(state=>state.app)
  return (
    <div className='relative'>
      <div className='w-48 h-48 z-[-1] bg-pink absolute bottom-[-10%] right-0 blur-[180px]'></div>
      <div className='site-container my-10 lg:my-20'>
        <h1 className='text-xl text-center md:text-2xl lg:text-3xl mb-3 font-semibold'>
            Exclusive Courses for <span className='text-blue'>Non</span>Academy members
          </h1>
          <p className='text-white/80 text-center sm:text-[18px] mx-auto w-[80%] lg:w-[50%] mb-[30px]'>
              Join our NonAcademy community absolutely free and find the best 
              courses by our industry experts. Ready to upskill yourself?
              <Link href="/all-courses" className='ml-3 text-sky-400 cursor-pointer'>
                Our All Courses 
                <FiArrowRight className='inline ml-2' /> 
              </Link>
          </p>
        <div className='flex gap-5 justify-center items-center flex-wrap'>
          {
            courses.slice(0,3).map(course=>(
              <CourseCard key={course._id} title={course.name} price={course.price} image={course.image}
              id={course._id}
              />
            ))
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default HomeCourses