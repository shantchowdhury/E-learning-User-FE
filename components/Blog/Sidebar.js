import Relatedblog from './Relatedblog';
import { useSelector } from 'react-redux';

function Sidebar() {
  const {posts} = useSelector(state => state.app);

  return (
    <div className=' xl:w-[25%] h-max xl:sticky top-24'>
        <h3 className='text-white text-xl font-Poppins xl:mt-0 mt-7 mb-7'>Related Blogs</h3>
        {
            [...posts].reverse().slice(0, 5).map(post => {
              return <div key={post.Slug}><Relatedblog post={post} /></div> 
             }
            )
        }
        <h3 className='text-white text-xl font-Poppins my-5'>Featured video</h3>
        <iframe height={170} src="https://www.youtube.com/embed/BhdP2nPeSAM" title='Youtube video' className='rounded-md'></iframe>
    </div>
  )
}

export default Sidebar