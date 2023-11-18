import {useEffect} from "react";
import { useSelector } from "react-redux";
import Mission from '../../components/About/Mission'
import Team from '../../components/About/Team';
// import TeamImage from '../../images/team.png';
import Link from "next/link";
import GenerateTitle from "../../GenerateTitle";

export default function About() {
  useEffect(() => GenerateTitle('NonAcademy - About us'), []);
  const {sponsors} = useSelector(state => state.app);

  return (
    <div className="relative">
      <div className='absolute left-1/3 top-[-10%] w-52 h-52 rounded-full blur-[200px] bg-cyan z-[-1]'></div>

      <section className="site-container lg:px-[80px] lg:py-0 py-10 min-h-[50vh] flex lg:flex-row flex-col items-center">
        <div className="lg:text-left text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[38px] font-semibold">WHO WE ARE <span className="text-yellow">?</span> </h1>
          <p className="lg:w-2/3 sm:text-[18px] mt-5 text-white/80">
           NonAcademy is the first online tech-versity and student community in Bangladesh. The platform assists students in learning new skills, 
           networking with others, and growing as an individual from outside of the academy.
          </p>
          <Link href="/contact" className="w-32 h-[40px] p-[2px] rounded-full lg:block hidden bg-gradient-to-r from-pink to-cyan mt-5 text-sm md:text-sm font-Poppins dfont-[300]">
            <div className="h-full rounded-full w-full flex items-center justify-center bg-dark">
              Contact us
            </div>
          </Link>
        </div>
        <div>
          <img src="/assets/images/team.png" alt="" />
        </div>
      </section>

      {/* nextsection */}

      <div className="bg-black bg-center py-6 lg:py-5">
         <div className="site-container">
            <h1 className="font-semibold text-white text-center text-lg sm:text-xl md:text-2xl mb-5">
              We are trusted by the best
            </h1>
            <div className="flex flex-wrap items-center justify-center space-x-5 sm:space-x-10 lg:space-x-12">
              {
                sponsors.map(item => {
                  return <img key={item._id} className='mx-5 sm:mx-10 w-28' src={`https://storage.googleapis.com/nonacademy-essential-images/${item.image}`} />
                })
              } 
            </div>
         </div>
      </div>

      <Mission />
      <Team />
    </div>
  );
}
