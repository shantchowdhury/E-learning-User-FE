// import Emoji from '../../images/emoji.webp';
import {Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCard from "./TeamCard";
import { useSelector } from 'react-redux';


function Team() {
  const {members} = useSelector(state => state.app);
  

  return (
  <div className="relative">
      <div className='absolute right-0 top-[-10%] w-52 h-52 rounded-full blur-[200px] bg-pink'></div>
    <div className="site-container px-8 lg:px-[150px] pb-10">
        <div className="mb-10">
          <h1 className="md:mt-10 font-semibold text-center text-xl md:text-3xl">
            The <span className="text-orange">team</span> that makes it all possible 
            <img src="/assets/images/emoji.webp" alt="" className="w-10 ml-4 inline" />
          </h1>
        </div>
       
        {/* <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
          }}
        >
          {
            members.map(item => {
            return <SwiperSlide key={item.Name}>
                      <TeamCard 
                        img={`https://storage.googleapis.com/nonacademy-essential-images/${item?.image}`} 
                        name={item.Name}
                        position={item.Position}
                        linkedin={item.Link}
                      />
                    </SwiperSlide>
            })
          }
        </Swiper> */}
      </div>
   </div>
        
  );
}

export default Team;
