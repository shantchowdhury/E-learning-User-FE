import { useState,useEffect } from 'react';
import {FaUserCircle} from 'react-icons/fa';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { useRef } from 'react';

const NavigationItems = ({isMenuOpen }) => {
  const {isLoggedIn} = useSelector(state => state.auth);
  const ref = useRef(null);
  const dispatch=useDispatch()

  useEffect(() => {
    if(isMenuOpen) {
      ref.current.classList.remove('left-[-800px]');
      ref.current.classList.add('left-0');
    }else{
      ref.current.classList.remove('left-0');
      ref.current.classList.add('left-[-800px]');
    }
  }, [isMenuOpen])

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Courses",
      path: "/all-courses",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: 'Blog',
      path: '/blog'
    },
    {
      name: "About us",
      path: "/about",
    }
    
  ];

  return (
    <div className={style.container} ref={ref}>
      <ul className={style.navbar}>
        {
          routes.map((item, index) => (
            <Link key={index + 1} href={item.path}>
              <li className={style.navlink}> {item.name} </li>
           </Link>
          ))
        }
        
        {
          !isLoggedIn ?
          <Link href="/signin">
            <li className={style.button}>
              Sign In
            </li>
          </Link>
          :
          <Link href="/u/dashboard">
            <li className={style.button}>
              <FaUserCircle size={18} />My Account
            </li>
          </Link>
        }
      </ul>
    </div>
  );
};

const style = {
  container: "h-0 w-full lg:h-auto lg:block lg:w-auto lg:ml-auto lg:left-0 left-[-800px] relative transition-all duration-300",
  navbar: "flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-10 mt-5 lg:mt-0 duration-700 w-full transition-all",
  navlink: `text-center lg:py-2 ease-in duration-300 lg:my-0 my-2 py-1 relative font-Poppins text-white font-light text-[15px] tracking-wide navlink`,
  button: "lg:mx-0 mx-auto gap-3 mb-4 mt-2 lg:mb-0 lg:mt-0 bg-gradient-to-l from-cyan to-pink text-white px-4 py-2  flex items-center justify-center rounded-full w-max font-Poppins text-sm font-[500]",
};

export default NavigationItems;