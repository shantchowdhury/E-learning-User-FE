import React, {useState, useEffect} from "react";
import moment from "moment";
// import google from '../../images/google.png';
import {ScaleLoader} from 'react-spinners';
import { BsEye, BsX } from "react-icons/bs";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signin,googleSignin } from "@/redux/authservice/authActions";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { toast } from "react-hot-toast";
import GenerateTitle from "../../GenerateTitle";
import { useRouter } from "next/router";


const Signin = () => {
  useEffect(() => GenerateTitle('NonAcademy - Sign In'), [])

  const navigate=useRouter()
  const dispatch = useDispatch();
  const {isLoading, googleLoading, isLoggedIn} = useSelector(state => state.auth);
  const [showPassword, setShow] = useState(false);

  const [data, setData] = useState({ Email: '', Password: ''})

  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!data.Email || !data.Password) return toast.error('Fill all the details');
    dispatch(signin({data, navigate}));
  }

  const googleLogin = response => {
    const profile = jwtDecode(response.credential);

    dispatch(googleSignin({
      data : {
        Name: `${profile.given_name} ${profile.family_name}`,
        Email: profile.email,
        Password: profile.jti + Date.now(),
        verified: profile.email_verified,
        profile_image: {
          normal: 'default.png', 
          google_pic: profile.picture
        },
        login_type: 'google',
        joined: moment().format('DD MMM, YYYY')
      }, 
      navigate
    }));
  }

  useEffect(function(){
    if(isLoggedIn){
      navigate.push('/u/dashboard')
    }
  }, [isLoggedIn])

  return (
    <div className={styles.main}>
      <div className="relative">
        
        <div className="rounded-md absolute top-[-2%] left-[-3%] sm:top-[-5%] sm:left-[-7%] w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br to-pink/70 from-yellow/90"></div>
        <div className="rounded-md absolute top-[-4%] right-[-4%] sm:top-[-10%] sm:right-[-10%] w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-bl to-green/80 from-cyan"></div>
        <div className="rounded-md absolute bottom-[-2%] left-[-3%] sm:bottom-[-8%] sm:left-[-8%] w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-bl to-green/80 from-cyan"></div>
       
        <div className="shadow-2xl bg-[rgba(255,255,255,0.03)] backdrop-filter backdrop-blur-[50px] w-[90vw] sm:w-[450px] px-5 sm:px-10 py-10 border border-gray rounded-xl">
          <div className="mb-4 sm:mb-8">
              <h1 className={styles.welcome}>
                  Welcome back <span className="text-yellow">!</span>
              </h1>
              <p className="text-white/80 text-[15px]">Please enter your login credentials.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input type='email' placeholder="Email" name="Email" className={styles.input} value={data.Email} onChange={handleChange}/>
                
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="Password" placeholder="Password" className={styles.input} value={data.Password } onChange={handleChange}/>
              <button type="button" className={styles.password} onClick={() => {setShow(!showPassword)}}>
                {showPassword ? <BsX /> : <BsEye />}
              </button>
            </div>

            <div className={styles.flexRow}>
              <Link href="/signup" className=" text-white/80">
                Create account?
              </Link>

              <Link href="/forgot" className="text-sky-500">
                Forgot password?
              </Link>
            </div>

            <button disabled={isLoading} className={`${styles.submit} disabled:cursor-not-allowed`}>
              {isLoading ? <ScaleLoader color="#ffffff" height={12} /> : "Sign In"}
            </button>
          </form>

          {/* Social Login  */}
            <div className="relative overflow-hidden w-full">
              <div className="bg-white z-50 w-full text-dark/90 flex items-center justify-center rounded-md py-[10px] font-Poppins text-sm">
                {
                  googleLoading ? 
                  <ScaleLoader color="#4B83F1" height={18} />
                  :
                  <>
                    <img src="/assets/images/google.png" className="w-[22px] mr-3" /> <p>Sign in with Google</p>
                    <div className="opacity-0 top-0 items-center h-full flex absolute w-full">
                      <GoogleLogin onSuccess={googleLogin} />
                      <GoogleLogin onSuccess={googleLogin} />
                    </div>
                  </> 
                }
              </div>
            </div>   
        </div>
      </div> 
    </div>
  );
};

const styles = {
  main: "flex justify-center items-center site-container lg:px-[80px] min-h-screen sm:min-h-[90vh]",
  welcome: "md:w-[80%] text-2xl md:text-3xl sm:mb-3 font-semibold",
  flexRow: "flex justify-between items-center my-4 sm:my-2 text-sm sm:text-[16px]",
  input: "my-3 bg-[transparent] border border-slate-700 outline-none px-3 py-[10px] text-white rounded-md w-full my-2",
  submit: "bg-gradient-to-r from-pink to-cyan font-Poppins text-white text-[15px] h-[45px] my-4 rounded-md w-full",
  password: "absolute right-5 top-1 bottom-1",
  lines: "flex items-center gap-x-2 w-full mb-5",
  line: "h-[2px] w-full bg-gray",
};

export default Signin;
