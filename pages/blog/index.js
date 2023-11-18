import {useEffect} from 'react';
import Blogs from '../../components/Blog/Blogs.js';
import Sidebar from '../../components/Blog/Sidebar.js';
import GenerateTitle from '../../GenerateTitle.js';
import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

function Blog() {
  useEffect(() => GenerateTitle('NonAcademy - Blog'), []);
  const {isLoading} = useSelector(state => state.app);

  return (
    !isLoading ?
    <div className='relative'>
        <div className='absolute right-0 h-52 w-52 rounded-full blur-[200px] bg-cyan z-[-1]'></div>
        <div className='absolute top-1/2 left-[-10%] h-52 w-52 rounded-full blur-[200px] bg-green zd-[-1]'></div>
      <div className={styles.container}>
          <Blogs />
          <Sidebar />
      </div>
    </div>
    :
    <div className='flex items-center justify-center w-full h-[60vh]'>
     <ClipLoader color='white' />
    </div>
  )
}

const styles = {
    container: "site-container md:py-[50px] lg:px-[80px] flex xl:flex-row flex-col justify-between"
}

export default Blog