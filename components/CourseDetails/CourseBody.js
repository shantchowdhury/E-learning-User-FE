import React from 'react';
import CourseFaq from './CourseFaq';
import { useSelector } from 'react-redux';

function CourseBody() {
  const {course}=useSelector(state=>state.app)
  
  const chapters = [
    {name: 'Course chapter 1'},
    {name: 'Course chapter 2'},
    {name: 'Course chapter 3'},
    {name: 'Course chapter 4'},
    {name: 'Course chapter 5'}
  ]
  
  return (
    <div className="site-container px-[120px] py-14">
      <div className="flex justify-between">
        <div className="w-[60%] space-y-3">
          {
            course?.sections?.map((value, index) => {
              return <CourseFaq key={index} title={value.sectionName} subsections={value.subsections} />
            })
          }
        </div>

        <div className="w-[35%]">
          <h3 className='text-2xl border-b-2 border-green pb-4 font-Poppins'>About this course</h3>
          <p className='text-white/80 mt-5 text-[17px] leading-relaxed'>
            {course?.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourseBody