import { useState, useEffect } from 'react';
import {BiSearch} from 'react-icons/bi';
import Bloglongcard from './Bloglongcard';
import Blogshortcard from './Blogshortcard';
import { useSelector } from 'react-redux';

function Blogs() {
  const {posts} = useSelector(state => state.app);
  const [data, setData] = useState([]);
  const [searchTerm, setSearch] = useState('');

  useEffect(() => {
    setData(posts);
  }, [posts])

  const search = () => {
    const result = [];
    if(searchTerm.trim()){
      posts.forEach(item => {
       if(item.Title.includes(searchTerm)){
          result.push(item);
        }
      })
      setData(result);
    }
  }

  useEffect(() => {
    if(!searchTerm.trim()){
      setData(posts);
    }
  })

  return (
    <div className='xl:w-[70%]'>
        <h3 className='text-white text-xl font-Poppins sm:mb-6 lg:mb-10'>Latest Blogs</h3>
        <div className='w-full h-12 relative my-5'>
            <input onChange={e => setSearch(e.target.value)} value={searchTerm} type="text" className='w-full h-full bg-white rounded-full text-dark px-5 focus:border-slate-600 outline-0' placeholder='Search blog, topics and more' />
            <BiSearch onClick={search} className='absolute bg-cyan w-8 h-8 p-2 rounded-full text-white cursor-pointer top-[50%] translate-y-[-50%] right-3 ' />
        </div>
        {
          data.length > 0 ?
            <>
              <Bloglongcard post={[...data].reverse()[0]} /> 
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-7 justify-center sm:justify-between'>
                {
                  [...data].reverse().slice(1).map(post => {
                    return <div key={post.Slug}> <Blogshortcard post={post} /> </div>
                  })
                }
              </div>
            </>
          :
          <p className='font-Poppins h-[50vh]'>Not found</p>
        }
    </div>
  )
}



export default Blogs