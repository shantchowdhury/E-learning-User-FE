import { useState } from 'react';
import google from '../../images/google.png';
import { useSelector, useDispatch } from 'react-redux';
import { forgotPassword } from '../../app/securityservice/securityActions';
import { ScaleLoader } from 'react-spinners';
import GoogleAlertPopup from './Popups/GoogleAlertPopup';

function GooglePasswordReset() {
    const [isEnabled, setEnabled] = useState(false);
    const {isLoading} = useSelector(state => state.security);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const sendLink = () => {
        dispatch(forgotPassword({email: user.Email, expire: Date.now() + 1800000}));
    }

  return (
    <div>
      <h3 className='text-xl lg:text-2xl font-normal font-Poppins mb-6 xl:mb-6'>Reset Your Password</h3>
      <p className='text-white/80 mb-3 sm:text-[17px]'>
        Resetting your password is easy. Just press the button below and
        follow the instructions. We'll have you up and running in no time.
        
      </p>
      <p className='text-white/80 mb-5 sm:text-[17px]'>
        <span className='text-danger font-Poppins'>Note:</span> send password reset link if you only want to reset or forgot password.
      </p>
      <button onClick={sendLink} className='cursor-pointer font-Poppins text-sm bg-green text-dark py-[10px] w-48 rounded-full'>
        {
            isLoading ? <ScaleLoader color="#121F3A" height={10} /> : 'Send Reset Link'
        }
      </button>

      <div className='mt-16 border border-gray flex sm:flex-row flex-col items-start sm:items-center justify-between rounded-md p-3 sm:p-5'>
        <div className='flex items-center gap-5 sm:mb-0 mb-3'>
          <div className='bg-black sm:block hidden rounded p-3'>
            <img src={google} alt="Google" className='w-6' />
          </div>
          <div>
            <h4 className='font-Poppins'>Google</h4>
            <p className='text-white/80'>{user?.Name}</p>
          </div>
        </div>
        <div>
          <button onClick={() => setEnabled(prev => !prev)} className='bg-black up rounded py-3 w-32 font-Poppins text-sm font-light'>
             Disconnect
          </button>
        </div>
      </div>

      <GoogleAlertPopup isEnabled={isEnabled} setEnabled={setEnabled} />
    </div>
  )
}

export default GooglePasswordReset