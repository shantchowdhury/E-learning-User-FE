import {useEffect} from 'react';
import CourseHero from '../../components/AllCourses/CourseHero';
import Sponsorships from '../../components/Home/Sponsorships';
import CourseCard from '../../components/CourseDetails/CourseCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import GenerateTitle from '../../GenerateTitle';
import axios from 'axios';
import { useState } from 'react';
import { setCourses } from '@/redux/fetchService/fetchSlice';
import { useDispatch, useSelector } from 'react-redux';
import CourseDetails from '@/react_pages/Course/CourseDetails';

function index() {
  const dispatch=useDispatch()
  const {courses}=useSelector(state=>state.app)
  useEffect(() => GenerateTitle("NonAcademy - All Courses"), []);
  
  
  return (
    <div>
      
      <CourseHero />
      <Sponsorships />
      <div className='site-container'>
        <h3 className='text-center text-[20px] sm:text-2xl md:text-3xl xl:text-[40px] xl:leading-[48px] mb-4 sm:mb-6 font-semibold'>
          Courses we have for you
        </h3>
        <div className='gap-5 flex justify-center items-center flex-wrap'>
          {
            courses.map(course=>(
              <CourseCard key={course._id} id={course._id} title={course.name} price={course.price} image={course.image}/>
            ))
          }
          {/* <CourseCard title="Blockchain development course" price="5,000 BDT"/>
          <CourseCard title="Complete React Native course" price="3,500 BDT"/>
          <CourseCard title="Master JavaScript with Node.js" price="2,000 BDT" />
          <CourseCard title="Blockchain development course" price="5,000 BDT"/>
          <CourseCard title="Complete React Native course" price="3,500 BDT"/>
          <CourseCard title="Master JavaScript with Node.js" price="2,000 BDT" /> */}
          
        </div>
        <div className='flex justify-center'>
          <Stack className='py-10'>
            <Pagination count={5} color="primary"/>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default index