import { useRef,useEffect, useState } from 'react';
import {ScaleLoader} from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import {googleDisconnect} from '../../../app/authservice/authActions'
import { toast } from 'react-hot-toast';

function GoogleAlertPopup({isEnabled, setEnabled}) {
   const [confirm, setConfirm] = useState();
   const ref = useRef(null);
   const dispatch = useDispatch();
   const {googleLoading, user} = useSelector(state => state.auth);
   
   const disconnectHandler = function(){
     if(confirm !== 'DISCONNECT') return toast.error('Type DISCONNECT to confirm');
     if(!user?.Phone) return toast.error("Phone number isn't added");
     if(!user?.Address) return toast.error("Address isn't added");
     dispatch(googleDisconnect());
   }

  useEffect(function(){
    setConfirm('');
    setEnabled(false);
  }, [user]);

  return (
    <div ref={ref} className={`top-0 left-0 bg-[#00000069] z-[100] transition-all duration-500 fixed ${isEnabled? 'w-full h-full opacity-100 pointer-events-auto' : 'opacity-0 w-full h-full pointer-events-none'}`}>
        <div className={`bg-[#ffffff] rounded-lg w-[300px] sm:w-[450px] pt-5 transition-all duration-500 relative mx-auto ${isEnabled? 'opacity-100 top-52' : 'opacity-0 top-20'}`}>

            <div className='w-[80%] sm:w-[70%] mx-auto'>
                <div className='font-Poppins text-center'>
                    <h4 className='font-bold text-danger text-xl'>WARNING</h4>
                    <p className='mt-2 mb-6 text-sm text-dark/80'> 
                    Before disconnecting, please reset your password for further login.  
                    </p>
                </div>
                <input onChange={e => setConfirm(e.target.value)} placeholder='Type DISCONNECT to confirm' className="w-full font-Poppins text-sm text-dark p-3 outline-none border rounded-md border-dark/10 placeholder:text-dark/40" />
            </div>
            

            <div className='bg-[#e0e9ec] font-Poppins font-light text-sm mt-8 p-3 flex justify-end gap-3 rounded-b-lg'>
                <button onClick={() => setEnabled(!isEnabled)} className='bg-black/50 py-2 w-20 rounded-full'>Cancel</button>
                <button disabled={googleLoading} onClick={disconnectHandler} className='bg-danger w-28 py-2 rounded-full disabled:cursor-not-allowed'>
                  {
                    googleLoading ? <ScaleLoader color="#ffffff" height={10} /> : 'Disconnect'
                  }
                </button>
            </div>
        </div>
    </div>
  )
}

export default GoogleAlertPopup