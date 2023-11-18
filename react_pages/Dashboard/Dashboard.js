import { useEffect, useState } from 'react';
// import {Outlet, Link, useLocation, useNavigate} from 'react-router-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiUser } from 'react-icons/hi';
import { MdPhotoCamera } from 'react-icons/md';
import { IoDocumentTextOutline, IoPaperPlaneOutline, IoLogOutOutline } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io'
import { BsShieldLock, BsGear } from 'react-icons/bs';
import { ScaleLoader, ClipLoader, MoonLoader } from 'react-spinners';
import { resend, profileUpload, logout, fetchUser } from '@/redux/authservice/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import GenerateTitle from '../../GenerateTitle';

function Dashboard() {

    useEffect(() => GenerateTitle('NonAcademy - Dashboard'), [])
    const location = useRouter().pathname;
    const navigate = useRouter();
    const dispatch = useDispatch();
    const [isOpenMenu, setMenu] = useState(false);
    const [menuText, setMenuText] = useState('User Profile');
    const [width, setWidth] = useState();
    const loadUser = () => {
        dispatch(fetchUser());
    }
    const { isLoading, profileLoading, resendLoading, user, fetch } = useSelector(state => state.auth);

    const Links = [
        { name: 'User Profile', path: '/u/dashboard', icon: <HiUser size={18} /> },
        { name: 'CV Upload', path: '/u/dashboard/cv', icon: <IoDocumentTextOutline size={18} /> },
        { name: 'My Events', path: '/u/dashboard/my-events', icon: <IoPaperPlaneOutline size={18} /> },
        { name: 'Password & Security', path: '/u/dashboard/password-and-security', icon: <BsShieldLock size={16} /> },
        { name: 'Account Setting', path: '/u/dashboard/account-close', icon: <BsGear size={16} /> }
    ]

    const uploadProfile = function (e) {
        const file = e.target.files[0];
        if (file) {
            if (file.size > (2 * 1024 * 1024)) return toast.error('Maximum allowed file size 2MB');
            const formData = new FormData();
            formData.append('profile', file);
            dispatch(profileUpload(formData));
        }
    }

    const toogleMenu = e => {
        setMenuText(e.target.innerText);
        setMenu(prev => !prev);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    })


    useEffect(function () {
        if (fetch && user === null) {
            // navigate('/signin')
        }
    }, [fetch])

    if (isLoading) {
        return <div className='flex justify-center items-center h-[70vh]'>
            <ClipLoader color='#ffffffeb' />
        </div>
    }

    return (
        user && <div className='site-container 2xl:px-56 py-16'>
            {
                !user?.verified &&
                <div className='bg-[#9b2c3537] flex md:flex-row flex-col justify-between items-start md:items-center border border-[#702e33] py-3 px-5 mb-5 font-Poppins font-light text-sm'>
                    <p className='md:mb-0 mb-3'>
                        A verification link has been sent to your email account. Click the link to verify your
                        email address.
                    </p>
                    <button disabled={resendLoading} onClick={() => dispatch(resend())} className='bg-danger text-darkd w-16 py-1 rounded-md disabled:cursor-not-allowed'>
                        {resendLoading ? <ScaleLoader color="#ffffff" height={6} /> : "Resend"}
                    </button>
                </div>
            }

            <div className='flex md:flex-row flex-col border border-gray px-6 '>
                <aside className='md:w-[25%] md:border-r border-gray md:pr-6 py-10'>
                    <div className='mb-10'>
                        <input type="file" name='profile' onChange={uploadProfile} className='hidden' accept="image/png, image/jpg, image/jpeg, image/webp" id='profile' />
                        <div className='relative w-32 h-32 mb-3 mx-auto rounded-full'>
                            {
                                profileLoading ?
                                    <div className='w-32 h-32 mb-3 mx-auto rounded-full flex justify-center items-center'>
                                        <MoonLoader color='white' speedMultiplier={0.5} />
                                    </div>
                                    :
                                    user?.profile_image?.google_pic !== null ?
                                        <img src={user?.profile_image?.google_pic} className="w-full h-full object-cover rounded-full pointer-events-none" />
                                        :
                                        <img src={`https://storage.googleapis.com/nonacademy-students-image/${user?.profile_image?.normal}`} className="w-full h-full object-cover rounded-full pointer-events-none" />
                            }
                            {
                                !profileLoading && <label htmlFor='profile' className='absolute bottom-3 cursor-pointer right-2 bg-blue rounded-full h-6 w-6 flex items-center justify-center'>
                                    <MdPhotoCamera className='text-white text-sm' />
                                </label>
                            }
                        </div>
                        <h3 className='text-center font-Poppins lg:text-lg'> {user.Name} </h3>
                        <p className='text-center text-white/80 text-sm'>Joined on: {user?.joined}</p>
                    </div>

                    {/* for mobile menu  */}
                    <div onClick={() => setMenu(prev => !prev)} className='md:hidden flex cursor-pointer text-green mb-5 items-center justify-between font-Poppins text-sm border border-gray rounded-full px-4 py-2'>
                        <p>{menuText}</p>
                        <IoIosArrowDown className={`${isOpenMenu ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />
                    </div>
                    {/* for mobile menu  */}

                    <div className={` ${width < 768 ? isOpenMenu ? 'max-h-[500px] overflow-auto' : 'max-h-0 overflow-hidden' : ''} transition-all duration-300 space-y-6 scrollbar-hide`}>
                        {
                            Links.map((value, index) => {
                                return (
                                    <Link onClick={toogleMenu} key={index} href={value.path} className={`flex items-center justify-between font-Poppins text-[15px] font-light px-4 py-2 rounded-lg ${location === value.path ? 'bg-blue text-white' : 'text-white/70'}`}>
                                        <p className='text-sm lg:text-[15px]'>
                                            {value.name}
                                        </p>
                                        {value.icon}
                                    </Link>
                                )
                            })

                        }
                        <button onClick={() => dispatch(logout(navigate))} className='flex w-full items-center justify-between font-Poppins text-[15px] font-light px-4 py-2 rounded-lg text-white/70'>
                            <p className='text-sm lg:text-[15px]'> Logout </p>
                            <IoLogOutOutline size={19} />
                        </button>
                    </div>
                </aside>
                <div className='w-full md:w-[60%] mx-auto md:mt-14 md:pb-0 pb-10'>
                    {/* <Outlet />  */}
                    hello
                </div>
            </div>
        </div>
    );

}

export default Dashboard