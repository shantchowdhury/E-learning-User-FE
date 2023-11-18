import { useState, useEffect } from "react";
import moment from "moment";
import { ScaleLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { sendMessage } from "../../app/securityservice/securityActions";

function Form() {

  const dispatch = useDispatch();
  const {isLoading, contactSuccess} = useSelector(state => state.security);
  const {user} = useSelector(state => state.auth);
  const [data, setData] = useState({Name: "", Email: "", Subject: "", Message: ""})

  const handlechange = e =>{
     setData({...data,  [e.target.name]: e.target.value});
  }

  const handleSubmit = () => {
    const sendTime = moment().format('DD MMM YYYY, hh:mm A');
    if(!data.Name || !data.Email || !data.Subject || !data.Message) return toast.error('Fill all the details');
    dispatch(sendMessage({...data, date: sendTime}));
  }

  useEffect(() => {
    user && setData({...data, Name: user.Name, Email: user.Email});
  }, [user])

  useEffect(() => {
    contactSuccess && setData({Name: "", Email: "", Subject: "", Message: ""})
  }, [contactSuccess]);

  return (
    <div className='relative'>
        <div className='w-24 lg:w-32 h-24 lg:h-32 rounded-md bg-gradient-to-bl to-cyan from-pink top-[-3%] sm:top-[-5%] right-[-3%] sm:right-[-5%] z-[-1] absolute'></div>
        <div className='w-24 lg:w-32 h-24 lg:h-32 rounded-md bg-gradient-to-bl to-green from-cyan bottom-[-3%] sm:bottom-[-5%] left-[-3%] sm:left-[-5%] z-[-1] absolute'></div>
        <div className={styles.main}>
            <input value={data.Name} onChange={handlechange} className={styles.input} placeholder='Name' name="Name" />
            <input value={data.Email} onChange={handlechange} className={styles.input} placeholder='Email' name="Email" />
            <input value={data.Subject} onChange={handlechange} className={styles.input} placeholder='Subject' name="Subject" />
            <textarea value={data.Message} onChange={handlechange} className={styles.input} rows="6" placeholder='Message' name="Message"></textarea>
            <button onClick={handleSubmit} disabled={isLoading} className={styles.submit}>
              {
                isLoading ? <ScaleLoader height={12} color="white" /> : 'Send Message'
              }
            </button>
        </div>
    </div>
  )
}

const styles = {
    main: "shadow-2xl bg-[rgba(255,255,255,0.03)] backdrop-filter backdrop-blur-[50px] px-5 sm:px-10 py-5 sm:py-10 border border-gray rounded-xl",
    input: "my-3 resize-none bg-[transparent] border border-slate-700 outline-none px-3 py-[10px] text-white rounded-md w-full my-2",
    submit: "bg-gradient-to-r from-pink to-cyan font-Poppins text-white text-[15px] h-[45px] my-4 rounded-md w-36 disabled:cursor-not-allowed",
};

export default Form