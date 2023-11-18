import React, { useState, useEffect} from "react";
import moment from "moment";
// import google from '../../images/google.png';
import { BsEye, BsX } from "react-icons/bs";
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
import ScaleLoader from 'react-spinners/ScaleLoader';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signup,googleSignin } from "@/redux/authservice/authActions";
import { toast } from "react-hot-toast";
import { GoogleLogin} from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import GenerateTitle from "../../GenerateTitle";
import { useRouter } from "next/router";

const Signup = () => {
  useEffect(() => GenerateTitle('NonAcademy - Sign up'), [])

  const dispatch = useDispatch();
  const navigate = useRouter();
  const {isLoading, googleLoading, isLoggedIn} = useSelector(state => state.auth);
  const [showPassword, setShow] = useState(false);

  const [data, setData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Address: '',
    Password: ''
  })

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!data.Name || !data.Email || !data.Phone || !data.Address || !data.Password) return toast.error('Fill all the details');
    if(!isValidPhoneNumber(data.Phone)) return toast.error('Phone number is not valid');
      
    dispatch(signup({
      data : {...data, joined: moment().format('DD MMM, YYYY')}, 
      navigate
    }));
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
      // navigate.push('/u/dashboard')
      navigate.push('/singin')
    }
  }, [isLoggedIn])

  return (
    <div className={styles.main}>
      <div className="relative">
        
        <div className="rounded-md absolute top-[-2%] left-[-3%] sm:top-[-5%] sm:left-[-7%] w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br to-pink/70 from-yellow/90 z-[-1]"></div>
        <div className="rounded-md absolute top-[-4%] right-[-4%] sm:top-[-10%] sm:right-[-10%] w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-bl to-green/80 from-cyan z-[-1]"></div>
        <div className="rounded-md absolute top-[40%] right-0 sm:right-[-7%] w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br to-yellow/90 from-pink/70 z-[-1]"></div>
        <div className="rounded-md absolute bottom-[-2%] left-[-3%] sm:bottom-[-8%] sm:left-[-8%] w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-bl to-green/80 from-cyan z-[-1]"></div>
          
          <div className={styles.flex}>
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className={styles.welcome}>
                Sign up to <span className="text-blue">Non</span>Academy 
              </h1>
              
              <input name="Name" placeholder="Name" className={ styles.input} onChange={handleChange} value={data.Name} />
              <input type="email" name="Email" placeholder="Email" className={styles.input} onChange={handleChange} value={data.Email} />
              <PhoneInput countries={['BD']}  addInternationalOption={false} placeholder='017XXXXXXXX' className={styles.input} value={data.Phone} onChange={value => setData({...data, Phone: value})} />
              <input name="Address" placeholder="Present Address" className={ styles.input} onChange={handleChange} value={data.Address} />
            
              <div className="password-field relative">
                <input type={showPassword ? "text" : "password"} name='Password' placeholder="Password" className={styles.input} onChange={handleChange} value={data.Password} />
                <button type="button" className={styles.password} onClick={() => setShow(!showPassword)}>
                  {showPassword ? <BsX /> : <BsEye />}
                </button>
              </div>
              
              <Link href="/signin" className="text-white/80 my-4 sm:my-2 text-[15px] sm:text-[16px] block">
                Already have an account?
              </Link>

              <button disabled={isLoading} className={`${styles.submit} disabled:cursor-not-allowed`}>
                {isLoading ? <ScaleLoader color="#ffffff" height={12} /> : "Register"}
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
  main: "flex justify-center items-center site-container lg:px-[80px] sm:py-0 py-20 min-h-screen",
  flex: "flex shadow-2xl bg-[rgba(255,255,255,0.03)] backdrop-filter backdrop-blur-[50px] flex-col gap-y-4 justify-center items-center w-[90vw] sm:w-[500px] shadow-custom px-5 sm:px-10 py-10 border border-gray rounded-xl",
  welcome: "text-2xl md:text-3xl mb-4 sm:mb-5 font-semibold",
  flexRow: "flex justify-between sm:flex-row flex-col items-center sm:gap-2",
  input: "my-3 bg-[transparent] border border-slate-700 outline-none px-3 py-[10px] text-white rounded-md w-full my-2",
  submit: 'bg-gradient-to-r from-pink to-cyan font-Poppins h-[45px] mt-3 rounded-md w-full text-sm',
  password: "absolute right-5 top-1 bottom-1",
  resendButton: "bg-slate-300 text-gray px-3 py-1 rounded-full "
};

export default Signup;
