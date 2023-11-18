import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import EventCard from './EventCard';

const Homeevents = () => {

  return (
      <div className='site-container sm:py-14'>
        <div className=" flex flex-col gap-y-3 justify-center items-center" >
          <h1 className='text-xl text-center md:text-2xl lg:text-3xl font-semibold'>
            Exclusive events for <span className='text-blue'>Non</span>Academy members
          </h1>
          <p className='text-white/80 text-center sm:text-[18px] w-[80%] lg:w-[50%] mb-[30px]'>
          Get access to valuable events that will be conducted by experts 
          by joining the NonAcademy community absolutely free.
            <span className='ml-3 text-sky-400 cursor-pointer'>
              See all Events 
              <FiArrowRight className='inline ml-2' /> 
            </span>
          </p>

          <div className="flex gap-5 justify-center items-center flex-wrap">
            {[...Array(3).keys()].map((event, index) => (
              <EventCard key={index} />
              ))}
          </div>
        </div>
      </div>
  );
};

export default Homeevents;
