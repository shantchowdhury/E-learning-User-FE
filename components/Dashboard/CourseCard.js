import React from 'react';
import EventImg from '../../images/course.png';
import {AiOutlineUser} from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';

function CourseCard() {
  return (
    <div className=" rounded-xl overflow-hidden shadow-lg" >
          <img className="w-full h-[150px] object-cover" src={EventImg}/>
          <div className="px-6 py-4 bg-black">
            <div className="mb-2">
              <h1 className="text-white font-Poppins mb-2">
                How to enhance your career  
              </h1>
              <p className="justify text-sm text-white/80 flex justify-start items-center gap-4 sm:gap-3">
                <AiOutlineUser className="text-green" size={16} />
                CEO and CO-Founder of Nakad
              </p>
              <p className="text-sm mt-1 flex justify-start items-center gap-4 sm:gap-3">
                <BsCalendarDate className="text-green" />
                <span className="text-yellow/90">Comming Soon</span>
              </p>
            </div>
            
            <button className="bg-gradient-to-r text-sm to-cyan from-pink font-Poppins py-2 w-full rounded-lg mt-3">
              Upcoming
            </button>
          </div>
        </div>
  )
}

export default CourseCard