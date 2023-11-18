import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import {MdOutlineDateRange} from 'react-icons/md';


function Bloglongcard({post}) {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useRouter();
  const [description, setDescription] = useState('');

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  })

  useEffect(() => {
    if(post){
      const plainString = post.Description.replace(/<[^>]+>/g, '');
      setDescription(plainString)
    }
  }, [post])

  return (
      <div className='w-full mx-auto cursor-pointer flex flex-col sm:flex-row mb-6 rounded-lg bg-black' onClick={() => navigate(`/blog/${post.Slug}`)}>
          <div className='w-full sm:w-[35%]'>
            <img src={`https://storage.googleapis.com/nonacademy-blog-images/${post?.image}`} className='object-cover w-full sm:w-auto h-[150px] sm:h-full rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none rounded-tr-lg' />
          </div>
          <div className='w-full sm:w-[65%] px-3 py-4 sm:px-7 sm:py-7'>
              <h4 className='text-pink font-Poppins uppercase text-[13px] font-[500]'>{post?.category?.Name || 'Uncategorized'}</h4>
              <h3 className='text-[16px] sm:text-xl font-Poppins text-white mb-3 mt-2 sm:mt-3'>{width > 640 ? post?.Title.slice(0, 80) : post?.Title.slice(0, 25)} ...</h3>
              <p className='text-white/60 sm:text-[16px] text-[15px]'>
                {width > 640 ? description.slice(0, 200) : description.slice(0, 80)} ...
              </p>
              <div className='hidden text-green mt-5 sm:flex gap-2 items-center text-sm'>
                <MdOutlineDateRange /> {post?.date}
              </div>
          </div>
      </div>
  )
}

export default Bloglongcard