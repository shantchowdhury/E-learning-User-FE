import React, { useState } from 'react'
import AccountClosePopup from './Popups/AccountClosePopup';

function AccountClose() {
  const [isEnabled, setEnabled] = useState(false);

  return (
    <div>
        <h3 className='text-xl font-Poppins lg:text-2xl mb-10'>Close Your Account</h3>
        <div className='mb-10'>
          <p className='text-white/80 sm:text-[17px]'>
            <span className='text-danger font-Poppins'>Warning: </span> 
            Doing this, your account will be closed and you'll not have access to any 
            courses or events you purchased. But you can reactivate your account by 
            contacting our support team. But all of your courses or events will be deleted permanently.
          </p>
        </div>
        <button onClick={() => setEnabled(true)} className='bg-blue px-4 text-[15px] py-[10px] rounded-full font-medium font-Poppins ml-auto block'>
            Ok, I Undertood
        </button>

        <AccountClosePopup isEnabled={isEnabled} setEnabled={setEnabled} />
    </div>
  )
}

export default AccountClose