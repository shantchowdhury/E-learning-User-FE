import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';


function Blogshortcard({post}) {
  const navigate = useRouter()
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(post){
      const plainString = post.Description.replace(/<[^>]+>/g, '');
      setDescription(plainString)
    }
  }, [post]);

  return (
    <div onClick={() => navigate(`/blog/${post.Slug}`)} className='rounded-lg bg-black cursor-pointer z-1 relative sm:mb-0 mb-6'>
      <img src={`https://storage.googleapis.com/nonacademy-blog-images/${post?.image}`} alt="Image" className='h-[150px] rounded-t-lg w-full object-cover' />
      <div className='px-3 py-4'>
        <h4 className='text-pink font-Poppins uppercase text-[13px] font-[500]'>{post?.category?.Name || 'Uncategorized'}</h4>
        <h3 className='text-[16px] font-Poppins text-white mt-2 mb-3'>{post?.Title.slice(0, 25)} {post?.Title.length > 25 ? '...' : ''}</h3>
        <p className='text-white/60 text-[15px]'>{description?.slice(0, 80)}...</p>
      </div>
    </div>
  )
}

export default Blogshortcard