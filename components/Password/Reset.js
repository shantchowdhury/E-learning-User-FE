import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {ScaleLoader} from 'react-spinners';
import React, {useState} from 'react';
import {BsEye, BsX} from 'react-icons/bs';
import { resetPassword } from '../../app/securityservice/securityActions';
import { useSelector, useDispatch } from 'react-redux';
import GenerateTitle from '../../GenerateTitle';


function Reset() {
    useEffect(() => GenerateTitle('NonAcademy - New Password'), [])

    const {isLoading, passwordSuccess} = useSelector(state => state.security);
    const dispatch = useDispatch();
    const [showPassword1, setShow1] = useState(false);
    const [showPassword2, setShow2] = useState(false);
    const {studentId, token} = useParams();

    const [data, setData] = useState({
        Password: '',
        confirmPass: ''
    })

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    useEffect(function(){
      setData({Password: '', confirmPass: ''})
    }, [passwordSuccess]);

    const reset = e => {
      e.preventDefault();
      dispatch(resetPassword({...data, studentId, token}));
    }

  return (
    <div className={styles.main}>
      <div className='relative'>

        <div className="rounded-md absolute top-[-3%] sm:top-[-10%] left-[-3%] sm:left-[-10%]  w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl to-pink/80 from-cyan"></div>
        <div className="rounded-md absolute bottom-[-3%] sm:bottom-[-10%] right-[10%] w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-bl to-green/80 from-cyan"></div>

        <form onSubmit={reset} className={styles.flex}>
          <h3 className={styles.heading}>Set New Password</h3>
          <div className="relative w-full">
              <input type={showPassword1 ? "text" : "password"} name="Password" placeholder="New password" className={styles.input} value={data.Password} onChange={handleChange}/>
              <button type="button" className={styles.password} onClick={() => {setShow1(!showPassword1)}}>
                {showPassword1 ? <BsX /> : <BsEye />}
              </button>
          </div>

          <div className="relative w-full">
              <input type={showPassword2 ? "text" : "password"} name="confirmPass" placeholder="Confirm password" className={styles.input} value={data.confirmPass} onChange={handleChange}/>
              <button type="button" className={styles.password} onClick={() => {setShow2(!showPassword2)}}>
                {showPassword2 ? <BsX /> : <BsEye />}
              </button>
          </div>

          <button disabled={isLoading} type='submit' className={`${styles.submit} ${isLoading ? 'disabled:cursor-not-allowed' : ''}`}>
            {isLoading ? <ScaleLoader color="#ffffff" height={12} /> : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  main: "flex justify-center items-center site-container min-h-[80vh] lg:px-[80px]",
  flex: "flex flex-col gap-y-4 justify-center items-center w-[90vw] sm:w-[450px] shadow-2xl bg-[rgba(255,255,255,0.03)] backdrop-filter backdrop-blur-[50px] px-5 sm:px-10 py-10 border border-gray rounded-xl",
  heading: "text-center md:w-[80%] mx-auto text-2xl md:text-2xl mb-2 sm:mb-3 font-semibold",
  password: "absolute right-5 top-3 bottom-1",
  input: "mt-3 bg-[transparent] border border-slate-700 outline-none px-3 py-[10px] text-white rounded-md w-full",
  submit: "bg-gradient-to-l from-cyan to-pink font-Poppins text-white text-sm h-[45px] rounded-md w-full mt-2",
};


export default Reset