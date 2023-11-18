import {useState, useEffect } from 'react';
// import logo from '../../images/nonacademy_logo.png';
import Link from 'next/link';
import NavigationItems from './NavigationItems';
import Toggler from './Toggler';
import { useRouter } from 'next/router';
import { fetchUser } from '@/redux/authservice/authActions';
import { useDispatch } from 'react-redux'
import { fetchSponsors,fetchTestimonials,fetchFaqs,fetchMembers,fetchPosts,fetchCourses } from '@/redux/fetchService/fetchActions';
import { setCourses } from '@/redux/fetchService/fetchSlice';

const Header = () => {
  const location = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState();
  const [width, setWidth] = useState();
  
  const dispatch=useDispatch()
  
  useEffect(function(){
    if(localStorage.getItem('user')){
      dispatch(fetchUser());
    }
    dispatch(fetchSponsors());
    dispatch(fetchCourses());
    dispatch(fetchTestimonials());
    dispatch(fetchFaqs());
    dispatch(fetchMembers());
    dispatch(fetchPosts());
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('scroll' , () => {
      setScroll(window.scrollY);
    })
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  })

  useEffect(() => {
    setIsMenuOpen(false);
    if(localStorage.getItem('user')){
      dispatch(fetchUser());
    }
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={`${style.header} ${(scroll > 50) || (width < 1024) ? 'bg-[rgba(255,255,255,0.03)] border-b border-gray backdrop-filter backdrop-blur-2xl' : ''}`}>
      {
        width < 1024 &&
        <div className={`${isMenuOpen ? 'w-screen' : 'w-0'} transition-all duration-300 bg-black border-b border-[#adadad] h-[400px] absolute top-0 left-0`}></div>
      }
      <nav className={style.headerContainer}>
        <Link href="/">
          <img src="/assets/images/nonacademy_logo.png" alt="Logo" className='w-[130px] sm:w-[150px]' />
        </Link>
        <Toggler fn={toggleMenu} isMenuOpen={isMenuOpen} />
        <NavigationItems isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
};

const style = {
  header: 'sticky top-0 w-full lg:py-2 z-50 ',
  headerContainer: 'site-container px-[40px] lg:px-[80px] pt-4 lg:pb-4 sticky flex flex-wrap items-center content-between',
};

export default Header;