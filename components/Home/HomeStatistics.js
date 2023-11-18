import React from 'react';
import Chart from '../../lottie/chart.json';
import Lottie from 'lottie-react';
import StatisticsCard from './StatisticsCard';
import StatisticsInfo from './StatisticsInfo';
// import Student from '../../images/student.png';
// import Program from '../../images/program.png';
// import Rating from '../../images/rating.png';
// import Laptop from '../../images/laptop.png';


function HomeStatistics() {
  return (
    <div className='relative'>
        <div className='w-52 h-96 z-[-1] bg-cyan absolute top-0 right-0 blur-[180px]'></div>
        <div className='w-52 h-64 bg-green absolute bottom-0 left-0 blur-[180px]'></div>
      <div className='site-container lg:px-[80px] py-10 lg:py-20'>
        <h3 className='text-[20px] text-center sm:text-2xl md:text-3xl xl:leading-[48px] font-semibold mb-3'>
        Quality <span className='text-yellow'>Education</span> means Quality Future
        </h3>
        <p className='sm:text-[18px] text-center mx-auto xl:w-8/12 text-white/90'>
         It is not possible to prepare yourself for a career in the real world and in the modern era with just academic knowledge. 
         Programs of NonAcademy with top industry professionals who can help you get years ahead in your career.
        </p>

        <div className='my-10 md:my-20 lg:gap-y-0 gap-4 grid grid-cols-2 lg:grid-cols-4'>
          <StatisticsCard img="/assets/images/student.png" title="600+" desc="Total learners" />
          <StatisticsCard img="/assets/images/program.png" title="03+" desc="Programs" />
          <StatisticsCard img="/assets/images/rating.png" title="4.7/5" desc="Average Rating" />
          <StatisticsCard img="/assets/images/laptop.png" title="100+" desc="Total Live Hours" />
        </div>

        <div className='flex items-center justify-between'>
          <div className='xl:block hidden'>
            <Lottie animationData={Chart} />
          </div>
          <div className='xl:w-[50%] space-y-10 pt-10'>
            <StatisticsInfo title='Get in touch with the best' desc="Take NonAcademy LIVE to the next level and clear your doubts in person instead of listening to pre-recorded courses" />
            <StatisticsInfo title='A central role for the Community' desc="As well as learning from peers, you will also build lifelong relationships through the many events offered by our team" />
            <StatisticsInfo title='Get in touch with the best' desc="Taking the lessons learned and putting them into practice you'll be able to develop actionable programs to grow" />
          </div>
        </div>
      </div>
    </div>
  )
}




export default HomeStatistics
