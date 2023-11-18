import React, {useState, useEffect} from 'react';
import { ScaleLoader } from 'react-spinners';
import { changePassword } from '../../app/securityservice/securityActions';
import { useSelector, useDispatch } from 'react-redux';
import GooglePasswordReset from './GooglePasswordReset';

function PasswordAndSecurity() {

    const {user} = useSelector(state => state.auth);
    const {isLoading, passwordSuccess} = useSelector(state => state.security);
    const dispatch = useDispatch();

    const [showPassword, setShow] = useState({
        current: false, 
        new: false, 
        confirm: false
    });

    const [data, setData] = useState({
      currentPass: '',
      'New password' : '',
      confirmPass: ''
    })

    const passwordHandler = e => {
      const name = e.target.name;
      const value = e.target.value;
      setData({...data, [name] : value});
    }

    useEffect(function(){
      passwordSuccess &&
      setData({
        currentPass: '',
        'New password' : '',
        confirmPass: ''
      })
    }, [passwordSuccess]);


  return (
      user?.login_type === 'google' ?
        <GooglePasswordReset />
      :
      <div className='space-y-5'>
        <h2 className='font-Poppins uppercase'>Change Password</h2>

        <div className={styles.inputContainer}>
          <input onChange={passwordHandler} name='currentPass' placeholder='Current Password' type={showPassword.current? 'text' : 'password'} className={styles.input} value={data.currentPass} />
          <button onClick={() => setShow({...showPassword, current: !showPassword.current})} className={styles.inputButton}>
              {showPassword.current ? "Hide" : "Show"}
          </button>
        </div>

        <div className={styles.inputContainer}>
          <input onChange={passwordHandler} name="New password" placeholder='New Password' type={showPassword.new? 'text' : 'password'} className={styles.input} value={data['New password']}/>
          <button onClick={() => setShow({...showPassword, new: !showPassword.new})} className={styles.inputButton}>
              {showPassword.new ? "Hide" : "Show"}
          </button>
        </div>

        <div className={styles.inputContainer}>
          <input onChange={passwordHandler} name='confirmPass' placeholder='Confirm New Password' type={showPassword.confirm? 'text' : 'password'} className={styles.input} value={data.confirmPass} />
          <button onClick={() => setShow({...showPassword, confirm: !showPassword.confirm})} className={styles.inputButton}>
              {showPassword.confirm ? "Hide" : "Show"}
          </button>
        </div>

        <div className='pt-5'>
          <button onClick={() => dispatch(changePassword(data))} disabled={isLoading} className={`${styles.button} ${isLoading ? 'disabled:cursor-not-allowed' : ''}`}>
            {
              isLoading ? <ScaleLoader color="#ffffff" height={12} /> : 'Save'
            }
          </button>
        </div>
      </div>
  )
}

const styles = {
  inputContainer: 'flex items-center h-[45px] sm:h-[50px] w-full',
  input: 'w-full h-full sm:text-[16px] text-sm bg-transparent border-r-0 border border-gray px-5 outline-none focus:border-slate-600',
  password: "absolute right-5 top-1 bottom-1",
  inputButton: 'bg-gray h-full w-28 font-Poppins text-[13px] sm:text-sm',
  button: 'bg-blue w-28 py-[10px] text-[15px] rounded-full font-medium font-Poppins ml-auto block',
}

export default PasswordAndSecurity