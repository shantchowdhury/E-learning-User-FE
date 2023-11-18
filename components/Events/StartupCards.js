import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";


function StartupCards({img, title, founderName, date}) {
  return (
    <div className="w-[95%] md:w-[45%] lg:w-[30%] xl:w-[25%]">
      <div className="w-full rounded-xl overflow-hidden cursor-pointer transition hover:drop-shadow-md">
        <img
          className="w-full"
          src={img}
          alt="Mountain"
        />
        <div className="px-6 py-6 bg-black border border-white/10 space-y-2 border-t-0 rounded-b-xl">
          <div className="font-semibold mb-2">
            <h1 className="text-[18px] sm:text-xl">{title}</h1>
          </div>
          <p className="justify text-sm text-white/80 flex justify-start items-center gap-4 sm:gap-3">
            <AiOutlineUser className="text-green" size={20} />
            {founderName}
          </p>
          <p className="text-sm  mt-2 flex justify-start items-center gap-4 sm:gap-3">
            <BsCalendarDate className="text-green" />
            <span className="text-yellow/90">{date}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default StartupCards