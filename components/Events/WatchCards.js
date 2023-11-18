import React from "react";
import { toast } from "react-hot-toast";
import {BsArrowRight} from 'react-icons/bs'
// import WebinarImage from '../../images/webinar.png';
function WatchCards() {
  return (
    <div className="w-[95%] z-10 md:w-[45%] lg:w-[30%] xl:w-[25%]">
      <div className="w-full rounded-xl overflow-hidden border border-gray cursor-pointer transition hover:drop-shadow-md">
        <img
          className="w-full"
          src="/assets/images/webinar.png"
          alt="Mountain"
        />
        <div className="px-6 py-6 bg-black">
            <div className=" mb-8">
              <h1 className="text-lg text-white">
                <p>Art of Negotiating | AI Arif | Shahnewaz Rakib | <span className="text-blue">Non</span>Academy</p>
              </h1>
            </div>
            
            <button onClick={() => toast.success('Comming soon', {icon: '⭕'})} className="text-pink text-sm font-Poppins flex items-center gap-2">
              Watch Now <BsArrowRight />
            </button>
        </div>
      </div>
    </div>
  );
}

export default WatchCards;
