import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


const Testimonial = ({ testimonial }) => {

  return (
      <div className='2xl:w-[340px] bg-black border border-white/10 relative sm:rounded-tl-none rounded-[30px]'>
        <blockquote className="px-6 py-4">
          <p className='text-base my-3 text-white/80'>
            <RiDoubleQuotesL className='text-pink/80 text-xl'/>
            {testimonial?.Review}
            <RiDoubleQuotesR className='text-pink/80 text-xl'/>
          </p>

          <div className="flex items-center">
            <img
              className="w-[50px] h-[50px] object-cover rounded-full border-4 border-black outline outline-1 outline-green/80"
              src={`https://storage.googleapis.com/nonacademy-testimonial-images/${testimonial?.image}`}
              alt="Img"
            />
            <div className="ml-4">
               <h3 className='font-semibold text-white/90 text-xl'>{testimonial?.Name}</h3>
               <p className='text-green/80 text-[14px]'>{testimonial?.Title}</p>
            </div>
          </div>
        </blockquote>
      </div>
  );
};

export default Testimonial;
