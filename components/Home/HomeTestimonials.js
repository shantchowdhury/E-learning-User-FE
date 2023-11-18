import Link from 'next/link';
import {FiArrowRight} from 'react-icons/fi';
import Testimonial from './Testimonial';
import { useSelector } from 'react-redux';

const Hometestimonials = () => {
 const {testimonials} = useSelector(state => state.app);

return (
     <div className='relative'>
      <div className='w-48 h-48 z-[-1] bg-green absolute top-[10%] left-0 blur-[160px]'></div>
        <div className='site-container pt-[50px] lg:pt-[80px] lg:px-[80px]'>
            <div className="grid grid-cols-1 2xl:grid-cols-2 items-center">
                <div className="2xl:mb-0 mb-10 space-y-4 lg:space-y-6 2xl:pr-28 text-center 2xl:text-left">
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                        Trusted by <span className='text-yellow'>thousands</span> of students all over the Bangladesh. 
                    </h1>
                    <p className='text-white/90 sm:text-[18px] mx-auto w-[80%] 2xl:w-auto'>
                    We are very happy to see that we have thousands of happy students with NonAcademy, and we look forward to seeing many more. Are you the next?
                    </p>
                    <button>
                        <Link href='/wall-of-love' className='text-sky-400 font-Poppins text-[15px]'>
                                View all
                                <FiArrowRight className='inline ml-1' />
                        </Link>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-8">
                    <div className='grid grid-cols-1 xl:grid-cols-2 2xl:flex 2xl:flex-col 2xl:gap-0 gap-4 2xl:space-y-8 2xl:mt-20'>
                            
                        {
                            [...testimonials].reverse().slice(0, 1).map(item => {
                                return <div key={item._id}><Testimonial testimonial={item} /></div>
                            })
                        }

                        {
                            [...testimonials].reverse().slice(1, 2).map(item => {
                                return <div key={item._id}><Testimonial testimonial={item} /></div>
                            })
                        }

                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-2 2xl:flex 2xl:flex-col 2xl:gap-0 gap-4 2xl:space-y-8'>
                        {
                            [...testimonials].reverse().slice(2, 3).map(item => {
                                return  <div key={item._id}><Testimonial testimonial={item} /></div>
                            })
                        }

                        {
                            [...testimonials].reverse().slice(3, 4).map(item => {
                                return <div key={item._id}><Testimonial testimonial={item} /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hometestimonials;
