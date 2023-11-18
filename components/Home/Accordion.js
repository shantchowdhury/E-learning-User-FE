import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useSelector } from "react-redux";
import Faq from "./Faq";

const Accordion = () => {
  const {faqs} = useSelector(state => state.app);

  return (
    <div className="relative">
      <div className='w-48 h-48 bg-cyan absolute bottom-0 right-0 blur-[160px]'></div>
      <div className="site-container space-y-6 lg:space-y-0 lg:px-[80px] py-10 lg:py-32 flex flex-col lg:flex-row justify-between">
        <div className="flex-1 lg:mt-6 space-y-4 lg:space-y-6 text-center lg:text-left">
            <h2 className='text-white font-bold mt-10 text-xl md:text-2xl lg:text-3xl'>
                Frequently asked <span className="text-yellow">Questions</span> 
            </h2>
            <p className='text-white/80 sm:text-[18px] lg:w-4/5  mx-auto lg:mx-0'>
              You can always ask any question in a convenient way, but the answers to the most common,
              questions are already collected below.
            </p>
            <button>
                <Link href='/contact' className='text-sky-400 font-Poppins text-[15px]'>
                    Contact us
                    <FiArrowRight className='inline ml-1' />
                </Link>
            </button>
        </div>

        <div className="flex-1 space-y-4" >
          {
            faqs.map(item => {
              return <div key={item._id}><Faq style='w-full xl:w-5/6 ml-auto' title={item.Title} content={item.Description} /></div>
            })
          }
        </div>

      </div>
    </div>
  );
};

export default Accordion;
