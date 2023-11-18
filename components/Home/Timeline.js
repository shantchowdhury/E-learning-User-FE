import React from "react";

const Timeline = () => {

  return (
    <div className="relative mt-[-20px] md:mt-[50px]">
      <div className='from-dark hidden md:hidden lg:block bg-gradient-to-b z-50 h-[25%] max-w-[50px] absolute left-0 right-0 mx-auto top-10'></div>
      <div className='from-dark hidden md:hidden lg:block bg-gradient-to-t z-50 h-[25%] max-w-[50px] absolute left-0 right-0 mx-auto bottom-[-3%]'></div>

      <div className="site-container mx-auto w-full">
        <div className="relative wrap lg:p-10 ">
          <div className='border-white hidden lg:block absolute  h-full border left-[50%]'></div>

          {/* This is the left portion */}
          <div className="lg:flex mb-8 lg:sticky lg:top-40 justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"></div>
            <div className="order-1 w-full lg:w-6/12 px-6 py-4">
              <h3 className='mb-2 md:mb-3 font-[600] text-base'>
                NonAcademy Process
              </h3>
              <h2 className='text-[20px] sm:text-2xl lg:text-3xl  xl:text-[32px] font-semibold my-2'>
                How to get your dream <span className="text-orange">job?</span>
              </h2>
              <p className='text-white/80 sm:text-[17px] lg:w-[70%]'>
                NonAcademy has helped candidates secure over 60 crores worth of jobs in top companies
              </p>
              <button className='bg-black text-base md:text-lg font-semibold px-3 py-[10px] mt-5 rounded-xl'>
                Let's get started
              </button>
            </div>
          </div>
          
          {/* 1st One */}
          <div className="mb-8 mt-0 lg:mt-[-270px] flex justify-between items-center w-full right-timeline">
            <div className="hidden md:hidden lg:block order-1 w-5/12"></div>
            <div className='hidden md:hidden lg:flex z-20 items-center justify-center order-1 shadow-xl w-7 h-7 rounded-full'></div>
            <div className="order-1 space-y-2 rounded-lg w-full md:w-full lg:w-5/12 px-6 py-4">
              <h3 className='font-semibold text-2xl'>
                Take NonAcademy Test
              </h3>
              <p className='text-white/80 text-[15px] sm:text-base leading-snug tracking-wide'>
                Explore career opportunites and take the at the test at
                NonAcademy
              </p>
              <img
                src="https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fprocess-block.svg&w=1920&q=75"
                alt=""
              />
            </div>
          </div>

          {/* 2nd One */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="hidden md:hidden lg:block order-1 w-5/12"></div>
            <div className='z-20 hidden md:hidden lg:flex items-center order-1 shadow-xl w-7 h-7 rounded-full'></div>
            <div className="order-1 space-y-2 rounded-lg  w-full md:w-full lg:w-5/12 px-6 py-4">
              <h3 className='font-semibold  text-2xl'>
                Unlock Job Interviews
              </h3>
              <p className='text-white/80 text-[15px] sm:text-base leading-snug tracking-wide'>
                Get shortlisted for job interviews based on your NonAcademy
                score
              </p>
              <img
                src="https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fproperty-1-unlock-job-interviews.svg&w=1920&q=75"
                alt=""
              />
            </div>
          </div>

          {/* 3rd One */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="hidden md:hidden lg:block order-1 w-5/12"></div>
            <div className='z-20 hidden md:hidden lg:flex items-center order-1 shadow-xl w-7 h-7 rounded-full'></div>
            <div className="order-1 space-y-2 rounded-lg  w-full md:w-full lg:w-5/12 px-6 py-4">
              <h3 className='font-semibold  text-2xl'>Choose the best job</h3>
              <p className='text-[15px] sm:text-base leading-snug tracking-wide'>
                Choose the best job that suits you based on the interviews
              </p>
              <img
                src="https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fproperty-1-choose-the-job.svg&w=1920&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Timeline;
