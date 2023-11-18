import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import CourseBanner from '../../images/course.png';

function CourseCard({id,title, price,image}) {
  const router=useRouter()
  function numberWithCommas(x="") {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="w-[95%] md:w-[45%] lg:w-[30%] xl:w-[25%]">
        <div className="w-full rounded-xl overflow-hidden" >
        <Link
               href={`/course-details/${id}`}>
          {image ? <img src={image} className="w-full object-cover" /> :
           <img src="/assets/images/course.png" className="w-full object-cover" />}
            </Link>
          <div className="px-6 py-6 bg-black border border-white/10 border-t-0 rounded-b-xl">
            <h1 className="text-[18px] sm:text-xl font-semibold mb-2">
              <Link
               href={`/course-details/${id}`}>
              {title && title?.substring(0,30)}{title?.length>30 && '...'}
              </Link>
              </h1>
            <h2 className="text-white/80 text-[15px] tracking-wider">
              Created By: <span className="text-pink">Non Academy</span>
            </h2>
            <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between mt-3 sm:mt-8">
              <button
              onClick={()=>{
                router.push(`/course-details/${id}`)
              }}
               className="bg-gradient-to-r text-sm to-cyan from-pink font-Poppins rounded-md w-full sm:w-32 h-[40px]">
                  Enroll Now
              </button>
              <p className="text-lg sm:mb-0 mb-3 font-semibold text-green">BDT {numberWithCommas(price)}</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CourseCard;