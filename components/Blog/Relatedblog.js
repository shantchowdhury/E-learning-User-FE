import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Relatedblog({post}) {
  const navigate = useRouter()
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  })
  
  return (
    <div onClick={() => navigate(`/blog/${post.Slug}`)} className='flex items-center mb-2 gap-3 border border-transparent hover:border-gray hover:shadow-2xl hover:bg-black rounded-md p-2 cursor-pointer'>
        <div>
          <img src={`https://storage.googleapis.com/nonacademy-blog-images/${post?.image}`} className='rounded-md w-[80px] h-[60px] object-cover' />
        </div>
        <div className='space-y-1'>
          <h5 className='font-Poppins text-[14px] leading-5'>
            {(width < 768) && (width >= 640) ? post?.Title.slice(0, 50) : post?.Title.slice(0, 25)} 
            {(width < 768) && (width >= 640) ? ( post?.Title.length > 50 ? '...' : '') : ( post?.Title.length > 25 ? '...' : '')} 
          </h5>
          <p className='text-green text-sm font-semibold'>{post?.date}</p>
        </div>
    </div>
  )
}

export default Relatedblog