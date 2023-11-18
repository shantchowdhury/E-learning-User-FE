import React, {useEffect} from 'react';
import verified from '../../images/verified.png';
import {BeatLoader} from 'react-spinners'
import {AiFillCheckCircle} from 'react-icons/ai';
import {FaTimesCircle} from  'react-icons/fa';
import {Link, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verifyEmail } from '../../app/securityservice/securityActions';
import GenerateTitle from '../../GenerateTitle';

function Verification() {
    useEffect(() => GenerateTitle('NonAcademy - Verification'), [])

    const {studentId, token} = useParams();
    const dispatch = useDispatch();
    const {isLoading, errorMessage, emailSucess} = useSelector(state => state.security);

    useEffect(function(){
        dispatch(verifyEmail({studentId, token}));
    },[])

  if(isLoading){
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div className={styles.loader}>
                <p>Checking </p>
                <BeatLoader color='white' size={12} speedMultiplier={0.6} />
            </div>
        </div>
    )
  }

  return (
    <>
    <div className='flex justify-center items-center h-[60vh] sm:h-[70vh]'>
        {
            !errorMessage ? 
            (
                <div>
                    <img className='mx-auto' src={verified} alt='Verified image'/>
                    <h3 className={`${styles.text} text-green-600`}>
                        {emailSucess} <AiFillCheckCircle className='inline ml-2 text-green' />
                    </h3>
                    <Link to="/u/dashboard" >
                        <p className={styles.btn}>Go to Dashboard & Refresh</p>
                    </Link>
                </div>
            )
            : 
            (
                <div>
                    <h3 className={`${styles.text} text-red-600`}> {errorMessage} <FaTimesCircle className='inline ml-2' /> </h3>
                </div>
            )
        }
    </div>
    </>
  )
}

const styles = {
    btn: "text-center text-blue px-3 py-1",
    text: 'text-center text-2xl md:text-3xl font-semibold',
    loader: 'text-center text-2xl md:text-3xl font-semibold flex items-baseline gap-2',

}

export default Verification