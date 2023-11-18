import React from 'react';
// import World from '../../images/world.png';
// import Cyber from '../../images/cyber.webp';

import {IoLogoFacebook, IoLogoYoutube} from 'react-icons/io';
function EventHero() {
  return (
  <>
   <main className="site-container flex lg:flex-row flex-col justify-between items-center my-2 lg:my-10  lg:px-[80px]">
        <div className="flex-1">
          <div className='lg:text-left text-center w-full lg:w-4/5'>
            <h1 className="text-sm sm:text-base tracking-tight font-semibold lg:mb-3">
              <p>
                <span className='text-blue'>NON</span>ACADEMY 
                <span className="text-yellow ml-1">EVENTS</span> 
              </p>          
            </h1>

            <h1 className="text-[20px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] font-semibold ml-0 ">
              Events that help you grow in a positive way
              <img src="/assets/images/world.png" alt="Rocket" className='w-10 lg:w-16 inline' />
            </h1>
            <p className="mt-3 sm:text-[18px] text-white/90">
              We provide you access to free LIVE events that help you immerse yourself in the areas you are passionate about and grow to the next level.
            </p>
          </div>

          <div className='mt-4 lg:mt-6 lg:mb-0 mb-10'>
            <div className={styles.buttons}>
                <a href="https://www.facebook.com/groups/nonacademy" target="blank">
                  <button className={`${styles.button} bg-gradient-to-r from-pink to-cyan`}>
                    <span className='flex items-center sm:justify-end justify-center gap-2'><IoLogoFacebook /> Join Community </span>
                  </button>
                </a>

                <a href="https://www.youtube.com/@NonAcademyMain" target="blank">
                  <button className={`${styles.button} bg-black border border-gray`}>
                    <span className='flex items-center sm:justify-end justify-center gap-2'><IoLogoYoutube/> YouTube Video </span>
                  </button>
                </a>
            </div>   
          </div>
        </div>

        <picture className='flex-1 lg:mb-0 mb-6 lg:order-last order-first relative'>
            <div className='absolute right-0 w-2/3 rounded-full blur-[200px] h-full bg-cyan z-[-1]'></div>
            <img className='lg:ml-auto lg:mx-0 mx-auto' src="/assets/images/cyber.webp"  />
        </picture>
    </main>
  
  </>
  )
}

const styles = {
  buttons: 'flex flex-col space-y-4 sm:space-y-0 sm:space-x-5 lg:justify-start justify-center sm:flex-row lg:block',
  button: 'rounded-full py-3 px-5 text-sm font-Poppins sm:w-auto w-full',
}

export default EventHero