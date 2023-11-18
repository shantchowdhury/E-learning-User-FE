import React from 'react';
// import HeroImage from '../../images/course-hero.png';
// import PlanetImage from '../../images/planet.png';
import {BsPlayFill} from 'react-icons/bs';
import Link from 'next/link';

function CourseHero() {
  return (
    <div className='relative'>
        <div className={styles.top_overlay}></div>
        <div className='site-container xl:px-[80px] py-[50px] flex xl:flex-row flex-col items-center justify-between'>
            <div className='xl:w-[40%] xl:text-left text-center order-2 xl:order-1'>
                <h1 className={styles.heading}>
                    <span className='text-yellow'>Learning</span> online now is much easier
                    <img src="/assets/images/planet.png" alt="Book Icon" className='inline w-10 sm:w-12 ml-3' />
                </h1>
                <p className={styles.paragraph}>
                The best online learning platform to find any topic you are interested in, 
                and access a wide selection of master classes from professionals that can help you develope new skills.
                </p>
                <div className='flex items-center sm:flex-row flex-col xl:justify-start justify-center gap-5'>
                    <Link href='/signup' className={styles.button1}>
                        Get Started
                    </Link> 
                    <a target='blank' href='https://www.youtube.com/@NonAcademyMain' className={styles.button2}>
                        <div className='h-[32px] w-[32px] sm:bg-cyan rounded-full flex items-center justify-center'>
                            <BsPlayFill size={18} className="sm:text-white text-cyan"/>
                        </div> 
                        <p className=''>Watch how it works</p>
                    </a> 
                </div>
            </div>
            <div className='order-1 xl:order-2'>
                <img src="/assets/images/na.png" className="ml-auto w-full" alt="Learning Illustration" />
            </div>
        </div>
    </div>
  )
}

const styles = {
    heading: "text-[20px] sm:text-2xl md:text-3xl xl:text-[40px] xl:leading-[48px] mb-0 mt-5 xl:mt-0 xl:mb-6 font-semibold",
    paragraph: "sm:text-[18px] mb-10 text-white/90 xl:px-0 md:px-[80px]",
    button1: "w-full flex items-center justify-center sm:w-max h-[45px] px-5 bg-gradient-to-r from-pink to-cyan rounded-full font-Poppins text-sm ",
    button2: "bg-[rgba(255,255,255,0.1)] w-full sm:w-max h-[45px] pl-2 pr-5 shadow-lg rounded-full flex sm:justify-start justify-center items-center gap-2 font-Poppins text-sm",
    top_overlay: 'absolute z-[-1] top-[-10%] left-[40%] h-52 w-52 bg-green blur-[180px]'
}

export default CourseHero