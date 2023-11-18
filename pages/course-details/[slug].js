import CourseDetails from '@/react_pages/Course/CourseDetails'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { setCourse,setEnrolled,setVideoUrl } from '@/redux/fetchService/fetchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

  
const index = () => {
  const router=useRouter()
  const {user}=useSelector((state)=>state.auth)
  const [course, setCourse2] = useState(null)
  const dispatch=useDispatch()
  const { slug } = router.query;
  useEffect(() => {
    if(slug){
      
      const isEnrolled = user ? user.courses.some((course) => course.slug == slug) : false;

      if(isEnrolled || user?.courses?.length>0){
        dispatch(setEnrolled(true))
        loadCourse()
      }
      else{
        dispatch(setEnrolled(false))
        loadCourseOverview()
      }
      
    }
    
  }, [slug,user])
  
  const loadCourse=async()=>{
    
    const res=axios.get(`${process.env.API_2}/api/course/data/${slug}`,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        "Authorization":"Bearer "+Cookies.get('token')
      },

    }).then((res)=>{
      dispatch(setCourse(res.data))
      setCourse2(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const loadCourseOverview=async()=>{
    const res=axios.get(`${process.env.API_2}/api/course/course-overview/${slug}`,
    {
      withCredentials: true,
    }).then((res)=>{
      dispatch(setCourse(res.data))
      setCourse2(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }


  
  
  
  return (
    <>
    <CourseDetails/>
    </>
  )
}

export default index