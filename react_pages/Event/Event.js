import React, {useEffect} from "react";
import EventHero from "../../components/Events/EventHero";
import Category from '../../components/Events/Category';
import WatchCards from "../../components/Events/WatchCards";
import UpcomingEvents from "../../components/Events/UpcomingEvents";
import GenerateTitle from "../../GenerateTitle";

function Event() {
  useEffect(() => GenerateTitle('NonAcademy - Events'), [])
  
  return (
    <React.Fragment>
      <EventHero />
      <UpcomingEvents />
      <Category />

      <div className="relative py-[20px] lg:py-[50px]">
        <div className="absolute w-52 h-52 bg-green top-0 blur-[180px] z-[-1]"></div>
        <div className="absolute w-52 h-52 bg-cyan right-0 bottom-0 blur-[180px]"></div>
        <div className='site-container flex gap-5 justify-center items-center flex-wrap'>
            <WatchCards />
            <WatchCards />
            <WatchCards />
            <WatchCards />
            <WatchCards />
            <WatchCards />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Event;
