import React from 'react';
import Love from '../../images/love.png';

const TestimonialsTextpart = () => {
    return (
        <div>
            <div className='site-container'>
                <section className='min-h-[30vh]  flex flex-col items-center justify-center'>
                    <h1 className='text-[20px] sm:text-2xl md:text-3xl xl:text-4xl font-bold flex items-center gap-2'>
                        Wall of Love 
                        <img src={Love} className="w-10 sm:w-14" alt="icon" />
                    </h1>
                
                    <div className="flex justify-center items-center mt-[30px]">
                        <p className='text-center lg:w-[40%] text-white/80 sm:text-[17px]'>
                            Look what our community members have in mind about us. People are getting  freelance opportunities, internships, startup cofounders, and what not! Our community members us.
                        </p>
                    </div>
                </section>
             </div>
        </div>
    );
}

export default TestimonialsTextpart;
