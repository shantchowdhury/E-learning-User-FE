import { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';
import {ScaleLoader} from 'react-spinners';
// import {updateEmail } from '../../../app/authservice/authActions';
import { updateEmail } from '@/redux/authservice/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

function EmailUpdatePopup({isEmailEnabled, setEmailEnabled}) {
  const navigate = useRouter()
  const ref = useRef(null);
  const dispatch = useDispatch();
  const {emailLoading, user} = useSelector(state => state.auth);
  const [data, setData] = useState({
    Email: '',
    Password: ''
  })

  const updateHandler = () => {
    if(!data.Email.trim()) return toast.error('Enter your email address');
    if(!data.Password.trim()) return toast.error('Enter password');
    dispatch(updateEmail(data));
  }

  useEffect(function(){
    setData({Email: '', Password: ''});
    setEmailEnabled(false);
  }, [user]);


  return (
    <div ref={ref} className={`top-0 left-0 bg-[#00000069] z-[100] transition-all duration-500 fixed ${isEmailEnabled? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-[#ffffff] rounded-lg w-[300px] sm:w-[450px] pt-5 transition-all duration-500 relative mx-auto ${isEmailEnabled? 'opacity-100 top-52' : 'opacity-0 top-20'}`}> 
            <h3 className='text-dark text-center text-lg font-Poppins font-semibold mb-5'>Add New Email</h3>
           
            <div className={styles.inputContainer}>
                <input type='email' placeholder='New email' value={data.Email} onChange={e => setData({...data, Email: e.target.value})} className={styles.input} />
                <input type='password' placeholder='Password' value={data.Password} onChange={e => setData({...data, Password: e.target.value})} className={styles.input} />
                {
                  user?.login_type === 'google' &&
                  <p className='text-dark font-Poppins text-[13px]'>
                    Go to <span className='cursor-pointer text-danger' onClick={() => navigate.push('/u/dashboard/password-and-security')}>'Password & Security'</span> to reset password
                  </p>
                }
            </div>

            <div className='bg-[#e0e9ec] font-Poppins font-light text-sm mt-8 p-3 flex justify-end gap-3 rounded-b-lg'>
                <button onClick={() => setEmailEnabled(false)} className='bg-black/50 w-20 py-2 rounded-full'>Cancel</button>
                <button onClick={updateHandler}  disabled={emailLoading} className='bg-blue w-24 py-2 rounded-full disabled:cursor-not-allowed'>
                  {
                    emailLoading ? <ScaleLoader color="#ffffff" height={10} /> : 'Save'
                  }
                </button>
            </div>
        </div>
    </div>
  )

}

const styles = {
    inputContainer: 'w-[90%] sm:w-[70%] mx-auto space-y-4',
    input: "w-full text-dark py-2 px-3 outline-none border rounded-md border-dark/10 placeholder:text-dark/30"

}

export default EmailUpdatePopup