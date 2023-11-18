import { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';
import {ScaleLoader} from 'react-spinners';
import PhoneInput from 'react-phone-number-input';
import { updatePhone } from '@/redux/authservice/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { toast } from 'react-hot-toast';

function PhoneUpdatePopup({isPhoneEnabled, setPhoneEnabled}) {
   const navigate = useRouter()
   const ref = useRef(null);
   const dispatch = useDispatch();
   const {phoneLoading, user} = useSelector(state => state.auth);

  const [data, setData] = useState({
    Phone: '',
    Password: ''
  })

  const updateHandler = function(){
    if(!isValidPhoneNumber(data.Phone)) return toast.error('Phone number is not valid');
    if(!data.Password.trim()) return toast.error('Enter password');
    dispatch(updatePhone(data));
  }

  useEffect(function(){
    setData({
      Phone: '',
      Password: ''
    })
    setPhoneEnabled(false);
  }, [user]);

  return (
    <div ref={ref} className={`top-0 left-0 bg-[#00000069] z-[1000] transition-all duration-500 fixed ${isPhoneEnabled? 'w-screen h-screen opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-white rounded-lg w-[300px] sm:w-[450px] pt-5 transition-all duration-500 relative mx-auto ${isPhoneEnabled? 'opacity-100 top-52' : 'opacity-0 top-20'}`}> 
            <h3 className='text-dark text-center text-lg font-Poppins font-semibold mb-5'>Add New Number</h3>
           
            <div className={styles.inputContainer}>
              <PhoneInput value={data.Phone} placeholder="017XXXXXXXX" defaultCountry='BD' countries={['BD']} addInternationalOption={false} onChange={value => setData({...data, Phone: value})} className={styles.input} />
              <input type='password' placeholder='Password' value={data.Password} onChange={e => setData({...data, Password: e.target.value})} className={styles.input} /> 
              {
                user?.login_type === 'google' &&
                <p className='text-dark font-Poppins text-[13px]'>
                  Go to <span className='cursor-pointer text-danger' onClick={() => navigate.push('/u/dashboard/password-and-security')}>'Password & Security'</span> to reset password
                </p>
              }
            </div>

            <div className='bg-[#e0e9ec] font-Poppins font-light text-sm mt-8 p-3 flex justify-end gap-3 rounded-b-lg'>
                <button onClick={() => setPhoneEnabled(false)} className='bg-black/50 w-20 py-2 rounded-full'>Cancel</button>
                <button onClick={updateHandler} disabled={phoneLoading} className='bg-blue w-24 py-2 rounded-full disabled:cursor-not-allowed'>
                  {
                    phoneLoading ? <ScaleLoader color="#ffffff" height={10} /> : 'Save'
                  }
                </button>
            </div>
        </div>
    </div>
  )
}

const styles = {
    inputContainer: 'w-[90%] sm:w-[70%] mx-auto space-y-4',
    input: "w-full text-dark py-2 px-3 outline-none border rounded-md  border-dark/10 placeholder:text-dark/30"

}

export default PhoneUpdatePopup