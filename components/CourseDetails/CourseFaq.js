import React, { useState } from 'react';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {AiFillYoutube} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoUrl } from '@/redux/fetchService/fetchSlice';

const CourseFaq = ({ title, subsections}) => {
    const dispatch=useDispatch()
    const {course}=useSelector(state=>state.app)
  const [isActive, setIsActive] = useState(false);
  const videos = [
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
    {
        icon: <AiFillYoutube size={20}/>,
        title: 'Your first JavaScript programme',
        length: '4:22'
    },
  ]

  return (
    <div>
      <div className={`border-gray flex cursor-pointer text-lg justify-between items-center py-3 px-4 border ${isActive ? 'border-b-0 rounded-t-lg' : 'rounded-lg'}`} onClick={() => setIsActive(!isActive)}>
        <p className={` ${isActive ? 'text-green' : 'text-white/80'} font-Poppins text-base`}>{title}</p>
        <div >{isActive ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
      </div>
      {isActive && 
        <div className='border-gray text-white/70 px-4 pt-2 pb-5 text-[15px] font-light border-t-0 border rounded-b-lg'>
            {
                subsections.map((value, index) => {
                    return (
                        <div key={index} className='hover:bg-dark flex items-center justify-between py-3 px-4 rounded-lg'>
                            <div className='flex items-center gap-2'>
                             {videos[0].icon}
                             <p className='text-[16px]'>{value.subSectionName} ({videos[0].length})</p>
                            </div>
                            <button
                            onClick={()=>{
                                dispatch(setVideoUrl(value.subSectionVideo))
                            }}
                             className='bg-blue px-4 text-sm font-Poppins text-white py-[5px] rounded-lg'>Start</button>
                        </div>
                    )
                })
            }
        </div>
      }
    </div>
  );
};

export default CourseFaq;