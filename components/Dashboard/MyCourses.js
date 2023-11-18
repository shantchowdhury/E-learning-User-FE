import React from 'react';
import CourseCard from './CourseCard';

function MyCourses() {
  return (
    <div>
      <h2 className='font-Poppins uppercase mb-10'>Upcoming Events</h2>
      <div id='mycourses' className=' h-[600px] overflow-auto'>
        <div className='gap-5 pb-5 grid sm:grid-cols-2 pr-5'>
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  )
}

export default MyCourses