import React, {useState} from 'react'
import { AiFillLinkedin } from "react-icons/ai";


function TeamCard({img, name, text, position, linkedin}) {

    const [overlay, setOvelay] = useState(false);

  return (
      <div className='text-center cursor-pointer'>
        <div className='relative w-[200px] h-[200px] mx-auto mb-5' onMouseOver={() => setOvelay(true)} onMouseLeave={() => setOvelay(false)}>
            <img className=" w-full h-full rounded-full object-cover" src={img} />
            <div className={`absolute w-full h-full rounded-full top-0 z-10 flex flex-col opacity-0 justify-center items-center bg-sky-500/30  duration-200 ${overlay ? 'opacity-100' : ''}`}>
                 <a target='_blank' href={linkedin} className="text-2xl text-white">
                    <AiFillLinkedin />
                 </a>
            </div>
        </div>
        <h2 className='text-[15px] font-light sm:text-base font-Poppins'>{name}</h2>
        <p className='text-sky-400 text-[15px] sm:text-base'>{position}</p>
        <p className='text-base'>{text}</p>
      </div>
  )
}

export default TeamCard;