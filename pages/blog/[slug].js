import {useEffect, useState} from 'react';
import {GrFacebookOption,GrLinkedinOption,GrTwitter} from 'react-icons/gr';
// import anonymous from '../../images/default.png';
import GenerateTitle from '../../GenerateTitle';
import {ClipLoader} from 'react-spinners';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


export default function () {
  const {posts} = useSelector(state => state.app);
  const [post, setPost] = useState({});
  const router=useRouter()
  const {slug}=router.query
  const navigate = router;

  useEffect(() => {
    let a = 1, found = false;
    posts.forEach(item => {
        if(item.Slug === slug){
            setPost(item);
            found = true;
            GenerateTitle(`${item.Title} - NonAcademy`);
            document.getElementsByTagName('meta')[1].content = item['Meta desc'];
            document.getElementsByTagName('meta')[2].content = `https://storage.googleapis.com/nonacademy-post-images/${item?.image}`;
        }
        if(a === posts.length){
            setTimeout(() => {
                !found && navigate.push('/blog')
            }, 1000);
        }
        a += 1;
    })
  }, [posts])

  return (
    Object.keys(post).length > 0 ?
        <div className="grid place-items-center py-[50px]">
            <div className=' max-w-[800px] lg:px-0 px-6'> 
            <h3 className='text-[20px] sm:text-2xl md:text-3xl text-yellow font-semibold'>{post?.Title}</h3>
            <div className='flex sm:flex-row sm:gap-y-0 gap-y-4 flex-col  justify-between my-5'>
                <div className='flex items-center gap-3'>
                    {
                    post?.author?.image ? 
                        <img src={`https://storage.googleapis.com/nonacademy-admin-images/${post?.author?.image}`} alt="" className='w-12 h-12 rounded-full object-cover' />
                        : 
                        <img src="/assets/images/default.png" alt="" className='w-12 h-12 rounded-full object-cover' />
                    }
                    <div>
                        <h5 className='text-lg font-semibold'>{post?.author?.Name || 'Anonymous'}</h5>
                        <p className='text-sm font-Poppins text-green/90'>{post?.date}</p>
                    </div>
                </div>
            
                <div className='flex gap-2'>
                    <div className={style.shareIcon}><GrFacebookOption size={14}/></div>
                    <div className={style.shareIcon}><GrLinkedinOption size={14}/></div>
                    <div className={style.shareIcon}><GrTwitter size={14}/></div>  
                </div>
            </div>

            <img src={`https://storage.googleapis.com/nonacademy-blog-images/${post?.image}`} alt="" className='w-full object-cover' />
            <div className='space-y-10 mt-10'>{parse(`${post.Description}`)}</div>
        </div>
        </div>
    : 
    <div className='flex h-[70vh] w-full justify-center items-center'>
        <ClipLoader color="white" />
    </div>
  )
}

const style = {
    shareIcon: "w-8 h-8 rounded-full cursor-pointer ease-in duration-100 hover:bg-blue bg-black text-white/90 flex justify-center items-center"
}
