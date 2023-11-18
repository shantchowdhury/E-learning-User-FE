import { useState, useRef, useEffect} from 'react';
import {ScaleLoader} from 'react-spinners';
import { deactivate } from '../../../app/authservice/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function AccountClosePopup({isEnabled, setEnabled}) {
   const navigate = useNavigate();
   const ref = useRef(null);
   const dispatch = useDispatch();
   const {deactivateLoading} = useSelector(state => state.auth);
   const [Password, setPassword] = useState('');
   
   const deactivateHandler = function(){
    if(!Password) return toast.error('Enter password');
     dispatch(deactivate({Password, navigate}));
   }

  return (
    <div ref={ref} className={`top-0 left-0 bg-[#00000069] z-[100] transition-all duration-500 fixed ${isEnabled? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-[#ffffff] rounded-lg w-[300px] sm:w-[450px] pt-5 transition-all duration-500 relative mx-auto ${isEnabled? 'opacity-100 top-52' : 'opacity-0 top-20'}`}>
            <h3 className='text-dark text-center text-lg font-Poppins font-semibold mb-5'>Account Deactivation</h3>
            <div className='w-[80%] sm:w-[70%] mx-auto'>
              <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className="w-full text-dark py-2 px-3 outline-none border rounded-md border-dark/10 placeholder:text-dark/30" />
            </div>

            <div className='bg-[#e0e9ec] font-Poppins font-light text-sm mt-8 p-3 flex justify-end gap-3 rounded-b-lg'>
                <button onClick={() => setEnabled(false)} className='bg-black/50 w-20 py-2 rounded-full'>Cancel</button>
                <button disabled={deactivateLoading} onClick={deactivateHandler} className='bg-danger w-24 py-2 rounded-full disabled:cursor-not-allowed'>
                  {
                    deactivateLoading ? <ScaleLoader color="#ffffff" height={10} /> : 'Deactivate'
                  }
                </button>
            </div>
        </div>
    </div>
  )
}

export default AccountClosePopup