import React, { useState } from 'react'
import PhoneUpdatePopup from './Popups/PhoneUpdatePopup';
import {MdVerified} from 'react-icons/md';
import {FaTimesCircle} from 'react-icons/fa';
import { ScaleLoader } from 'react-spinners';
import { updateProfile } from '@/redux/authservice/authActions';
import {useSelector, useDispatch} from 'react-redux';
import EmailUpdatePopup from './Popups/EmailUpdatePopup';

function UserProfile() {
  const dispatch = useDispatch();
  const {user, nameLoading} = useSelector(state => state.auth);

  const [data, setData] = useState({
    Name: user?.Name,
    Address: user?.Address
  })

  const [isPhoneEnabled, setPhoneEnabled] = useState(false);
  const [isEmailEnabled, setEmailEnabled] = useState(false);

  return (
    <React.Fragment>
      <div className='space-y-5'>
        <h2 className='font-Poppins uppercase'>Profile Information</h2>
        <div className={styles.inputContainer}>
          <input value={data.Name} onChange={e => setData({...data, Name : e.target.value})} placeholder='Frist name' className={styles.input} />
        </div>

        <div className={styles.inputContainer}>
          <input value={data.Address} onChange={e => setData({...data, Address : e.target.value})} placeholder='Address' className={styles.input} />
        </div>
        
        <div className='pt-5'>
          <button onClick={() => dispatch(updateProfile(data))} disabled={nameLoading} className={styles.button}>
            {
              nameLoading ? <ScaleLoader height={12} color='white' /> : 'Save'
            }
          </button>
        </div>

        <h2 className='font-Poppins uppercase'>Contact Details</h2>
        <div className={styles.inputContainer}>
          <div className={styles.static}> {user?.Phone || 'Phone number'} </div>
          <button onClick={() => setPhoneEnabled(true)} className={styles.staticButton}>Change</button>
        </div>

        <div>
          <div className={styles.inputContainer}>
            <div className={styles.static}>
                {user?.Email}
            </div>
            <button onClick={() => setEmailEnabled(true)} className={styles.staticButton}>Change</button>
          </div>
          {
            user?.verified ?
            (
              <span className='text-sm text-green flex items-center gap-2 mt-2'>
                Email is verified <MdVerified />
              </span>
            )
            :
            (
              <span className='text-sm  text-danger flex items-center gap-2 mt-2'>
                Email is not verified <FaTimesCircle />
              </span>
            )
          }
        </div>
      </div>

      <PhoneUpdatePopup isPhoneEnabled={isPhoneEnabled} setPhoneEnabled={setPhoneEnabled} />
      <EmailUpdatePopup isEmailEnabled={isEmailEnabled} setEmailEnabled={setEmailEnabled} />
    </React.Fragment>
  )
}

const styles = {
  inputContainer: 'flex sm:flex-row flex-col items-center sm:h-[50px] w-full',
  input: 'w-full h-[45px] sm:h-full bg-transparent border border-gray px-5 outline-none focus:border-slate-600',
  static: 'w-full break-words bg-gray text-white/60 sm:leading-[50px] sm:py-0 py-3 h-full px-5 outline-none',
  staticButton: 'bg-white text-dark w-full sm:w-auto h-[45px] sm:h-full px-8 font-Poppins text-sm',
  button: 'bg-blue w-28 py-[10px] text-[15px] rounded-full font-medium font-Poppins ml-auto block disabled:cursor-not-allowed',
}

export default UserProfile