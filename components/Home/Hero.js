import React from 'react'
// import HeroImage from '../../images/hero.png';
// import badge from '../../images/medal.png';
import {MdEventNote, MdOutlineNotStarted} from 'react-icons/md';

function Hero() {

  return (
    <main className={styles.hero__Container}>
      <div className={styles.top_overlay}></div>
      <div className={styles.hero__inner__left}>
        <div className={styles.badge}>
            <img src="/assets/images/medal.png" alt="Badge" className='w-4 mr-3' />
            <p className={styles.badge_text}>UNZIP YOUR CAREER</p>
        </div> 
        <h1 className={styles.left__heading}>
          Bangladesh's most active student community with 
          <span className='text-yellow'> 8,000+</span> members
        </h1>
        <p className={styles.left__para}>
          NonAcademy is the first Bangladesh's online tech-versity and student community that provides 
          a one-stop platform for students to learn new skills, network with others, 
          and grow as an individual from outside of the academy.
        </p>
        
        <div className={styles.buttons}>
          <a target='blank' href="https://www.youtube.com/playlist?list=PLRXbLmyNSQt6ktpmRXvuo8_hMDyAFc_w8" className={styles.button1}>
            <MdOutlineNotStarted size={20}/> Start Learning
          </a>
          <a target='blank' href='https://www.facebook.com/groups/nonacademy/' className={styles.button2}>
            <div className={styles.button2_overlay}>
             <MdEventNote size={18} />Join Us
            </div>
          </a>
        </div>
      </div>

      <div className={styles.hero__inner__right}>
          <img src="/assets/images/hero.png" alt="" className='ml-auto' />
      </div>
    </main>
  )
}

const styles = {
  top_overlay: 'absolute z-[-1] top-[-8%] left-[40%] h-52 w-52 bg-pink blur-[180px]',
  hero__Container : 'site-container lg:px-[80px] py-14 flex lg:flex-row flex-col items-center justify-between ',
  hero__inner__left: 'flex lg:order-1 order-2 lg:text-left text-center justify-end flex-col px-4 md:px-0 lg:block lg:flex-1 lg:pr-8',
  badge: 'flex border-green items-center border mb-5 w-max mx-auto lg:mx-0 px-4 py-[5px] rounded-full',
  badge_text: 'text-[12px] text-green font-Poppins tracking-wide',
  left__heading: 'text-[20px] sm:text-2xl md:text-3xl xl:text-[40px] xl:leading-[48px] mb-4 sm:mb-6 font-semibold',
  left__para: 'sm:text-[18px] mb-10 text-white/90',
  buttons: 'flex flex-col lg:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-5  sm:flex-row',
  button1: 'relative rounded-full h-[45px] sm:w-[170px] text-sm font-Poppins flex items-center justify-center gap-2 bg-gradient-to-l from-cyan to-pink text-white',
  button2: 'rounded-full h-[45px] sm:w-[170px] p-[2px] text-sm font-Poppins bg-gradient-to-r from-cyan to-pink text-white',
  button2_overlay: 'bg-dark h-full w-full flex items-center justify-center gap-2 rounded-full',
  hero__inner__right: 'flex-1 lg:order-2 order-1'
}

export default Hero