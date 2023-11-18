import React, { useState} from "react";
import PhoneInput from "react-phone-number-input";
import { BsEye, BsX } from "react-icons/bs";
import 'react-phone-number-input/style.css';


const Payment = () => {

  const [showPassword, setShow] = useState(false);
  const [newUser, setUser] = useState(false);
  const [data, setData] = useState({
    'First name' : '',
    'Last name' : '',
    Email: '',
    Phone: '',
    Address: '',
    TrxID: '',
    paymentNumber: '',
    Password: ''
  })


  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  }


  return (
    <div className={styles.main}>
      <div className={styles.flex}>
          <form className="w-full">
            <div>
              <h1 className={styles.heading}>Blockchain Development Course</h1>
              <h3 className={styles.subheading}>Total price: <span className="text-orange">৳ 5,500</span></h3>
            </div>

            <div className="flex gap-14">

              <div>
                  <fieldset className="border border-gray rounded-md px-3 my-8">
                      <legend className="bg-black px-3 py-2 rounded-md text-sm text-white/80 ">Selct Payment Method</legend>
                      <div className="flex items-center gap-10">
                        <div className="flex items-center">
                          <input type='radio' id="bkash" name="paymentMethod" />
                          <label htmlFor="bkash">
                            {/* <img src={Bkash} alt='Bkash' className="w-24" /> */}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type='radio' id="nagad" name="paymentMethod" />
                          <label htmlFor="nagad">
                            {/* <img src={Nagad} alt='Nagad' className="w-24" /> */}
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className={styles.flexRow}>
                      <input name="First name" placeholder="First Name" className={styles.input} onChange={handleChange} value={data['First name']} />
                      <input name="Last name" placeholder="Last name" className={ styles.input} onChange={handleChange} value={data['Last name']} />
                    </div>

                    <input type="email" name="Email" placeholder="Email" className={styles.input} onChange={handleChange} value={data.Email} />
                    <PhoneInput defaultCountry="BD" placeholder='018XXXXXXXX' className={styles.input} value={data.Phone} onChange={value => setData({...data, Phone: value})} />
                    <input name="Address" placeholder="Present Address" className={ styles.input} onChange={handleChange} value={data.Address} />
              </div>

              <div className="mt-11">
                <input name="paymentNumber" placeholder="From which number you sent the money?" className={ styles.input} onChange={handleChange} value={data.paymentNumber} />
                <input name="TrxID" placeholder="TrxID" className={styles.input} onChange={handleChange} value={data.TrxID} />
                <p onClick={() => setUser(!newUser)} className="cursor-pointer w-max my-3 text-blue">New User?</p>
                
                {
                  newUser && 
                  <div className="password-field relative">
                    <input type={showPassword ? "text" : "password"} name='Password' placeholder="New password" className={styles.input} onChange={handleChange} value={data.Password} />
                    <button type="button" className={styles.password} onClick={() => setShow(!showPassword)}>
                      {showPassword ? <BsX /> : <BsEye />}
                    </button>
                  </div>
                }

                <button className={styles.submit}> Submit </button>
              </div>

            </div>
          </form>
        </div>
    </div>
 );
};

const styles = {
  main: "flex justify-center items-center site-container lg:px-[80px] min-h-screen",
  heading: "text-2xl md:text-3xl mb-2 font-semibold",
  subheading: "text-lg md:text-2xl mb-5 font-semibold",
  flex: "gap-y-4 shadow-custom p-10 w-[900px] border border-gray rounded-xl",
  flexRow: "flex justify-between sm:flex-row flex-col items-center sm:gap-5",
  input: "my-3 bg-[transparent] border border-gray focus:border-slate-600 outline-none px-3 py-[10px] text-white rounded-md w-full my-2",
  submit: 'bg-[#18ac73] font-Poppins font-light py-[10px] mt-3 rounded-md w-full text-[15px]',
  password: "absolute right-5 top-1 bottom-1",
  lines: "flex items-center gap-x-2 w-full mb-1",
  line: "h-[2px] w-full bg-gray",
  errorText: 'text-sm text-center bg-[#9b2c3537] border border-[#702e33] p-3 my-3 rounded text-gray-900',
  success: 'text-sm flex items-center justify-between text-center bg-[#2c9b3b37] border border-[#2e7042] p-3 my-3 rounded text-gray-900',
  resendButton: "bg-slate-300 text-gray px-3 py-1 rounded-full "
};

export default Payment;
