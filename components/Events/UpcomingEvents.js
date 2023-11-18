import React from "react";
// import EventImage from '../../images/homeevent.png';
import StartupCards from './StartupCards';

function UpcomingEvents() {
 

  return (
    <div className="w-full lg:py-[50px]">
      <div className="site-container">
        <h1 className="font-semibold text-2xl md:text-3xl ml-0 text-center">
          Upcoming <span className="text-green">events</span> for you.
        </h1>
        <div className="mt-3 sm:text-[18px] text-white/80 text-center d:mt-5 lg:mx-auto lg:w-3/5">
        Get access to valuable events that will be conducted by experts by joining 
        the NonAcademy community absolutely free.
        </div>

        <div className="flex flex-wrap justify-center items-center  gap-5 mt-[30px]">
          <StartupCards
            img="/assets/images/homeevent.png"
            title="How to enhance your career"
            founderName="AI Arif, CEO and Founder of NonAcademy"
            date="Coming Soon"
          />
          <StartupCards
            img="/assets/images/homeevent.png"
            title="How to enhance your career"
            founderName="AI Arif, CEO and Founder of NonAcademy"
            date="Coming Soon"
          />
          <StartupCards
            img="/assets/images/homeevent.png"
            title="How to enhance your career"
            founderName="AI Arif, CEO and Founder of NonAcademy"
            date="Coming Soon"
          />
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
