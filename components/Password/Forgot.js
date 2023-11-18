import React, { useEffect, useState } from 'react';
import {HiArrowNarrowLeft} from 'react-icons/hi';
import { ScaleLoader } from 'react-spinners';
import {Link} from 'react-router-dom';
import { forgotPassword } from '../../app/securityservice/securityActions';
import {useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-hot-toast';
import GenerateTitle from '../../GenerateTitle';

function Forgot() {
  useEffect(() => GenerateTitle('NonAcademy - Forgot password'), [])

  const [email, setEmail] = useState('');
  const {isLoading, forgotSuccess} = useSelector(state => state.security);
  const dispatch = useDispatch();

  const Sendlink = e => {
    e.preventDefault();
    if(!email) return toast.error('Enter your email address');
    dispatch(forgotPassword({email}));
  }

  useEffect(function(){
    setEmail('');
  }, [forgotSuccess])

  return (
    <div className={styles.main}>
      <div className='relative'>
        <div className="rounded-md absolute top-[-3%] sm:top-[-8%] left-[-3%] sm:left-[-10%] w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl to-pink/80 from-cyan"></div>
        <div className="rounded-md absolute top-[10%] right-0 sm:right-[-10%] w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tl to-green/80 from-cyan"></div>
        <div className="rounded-md absolute bottom-[-3%] sm:bottom-[-10%] left-[10%] w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-bl to-green/80 from-cyan"></div>

        <form onSubmit={Sendlink} className={styles.flex}>
          <h3 className={styles.heading}>Did you forgot your password <span className='text-yellow'>?</span> </h3>
          <p className='font-Averta text-center text-white/80'>
            Enter the email address associated with your account
            and we'll send you a link to reset your password.
          </p>
          <input value={email} className={styles.input} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <button disabled={isLoading} type='submit' className={`${styles.submit} disabled:cursor-not-allowed`}>
            {
              isLoading ? <ScaleLoader color="#ffffff" height={12} /> : 'Send Reset Link'
            } 
          </button>
          <Link to='/signin' className='text-center flex items-center gap-2 text-[15px] font-Averta text-sky-500'>
            <HiArrowNarrowLeft/> Back to Login
          </Link>
        </form>
      </div>
    </div>
  )
}

const styles = {
  main: "flex justify-center items-center site-container min-h-[80vh] lg:px-[80px]",
  flex: "flex bg-[rgba(255,255,255,0.03)] backdrop-filter backdrop-blur-[50px] flex-col gap-y-4 justify-center items-center shadow-2xl w-[90vw] sm:w-[450px] px-5 sm:px-10 py-10 border border-gray rounded-xl",
  heading: "text-center md:w-[80%] mx-auto text-2xl md:text-3xl mb-2 sm:mb-3 font-semibold",
  input: "mt-3 bg-[transparent] border border-slate-700 outline-none px-3 py-[10px] rounded-md w-full",
  submit: "bg-gradient-to-l from-cyan to-pink font-Poppins text-white text-sm h-[45px] rounded-md w-full mt-2",
};


export default Forgot