import React, {useState, useEffect} from 'react'
import PhoneInput from 'react-phone-number-input';
import { submit } from '../../app/applicationservice/applicationActions';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import GenerateTitle from '../../GenerateTitle';
import { ScaleLoader } from 'react-spinners';
import { isValidPhoneNumber } from 'react-phone-number-input';

function Ambassador() {
    GenerateTitle('Campus Ambassador Application Form')
    const {isLoading, submissionSuccess} = useSelector(state => state.application);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        Name: '', Institute: '', Department: '', Year_of_study: '', Phone: null, Email: '',
        Street: '', City: '', Zip: '',
        Q1: '', Q2: '', Q3: '', Q4: '', Facebook: '', LinkedIn: '', Twitter: '', profile: ''
    })

    const submitForm = e => {
        if(!data.Name || !data.Institute || !data.Department || !data.Year_of_study || !data.Phone || !data.Email || !data.Street || 
            !data.City || !data.Zip || !data.Q1 || !data.Q2 || !data.Q3 || !data.Facebook){
           toast.error('Fill all the details');
        }else{
            if(!isValidPhoneNumber(data.Phone)) {
                toast.error('Phone is not valid');
            } else{
                if(!data.profile){
                    toast.error('Please upload photo')
                }else{
                    if(data.profile.size > (2 * 1024 * 1024)){
                        toast.error('Maximum allowed file size 2MB');
                    } else{
                        const formData = new FormData();
                        formData.append('Name', data.Name);
                        formData.append('Institute', data.Institute);
                        formData.append('Department', data.Department);
                        formData.append('Year_of_study', data.Year_of_study);
                        formData.append('Phone', data.Phone);
                        formData.append('Email', data.Email);
                        formData.append('Street', data.Street);
                        formData.append('City', data.City);
                        formData.append('Zip', data.Zip);
                        formData.append('Q1', data.Q1);
                        formData.append('Q2', data.Q2);
                        formData.append('Q3', data.Q3);
                        formData.append('Q4', data.Q4);
                        formData.append('Facebook', data.Facebook);
                        formData.append('LinkedIn', data.LinkedIn);
                        formData.append('Twitter', data.Twitter);
                        formData.append('image', data.profile);
                        dispatch(submit(formData))
                    }
                }
            }
        }
    }

    useEffect(() => {
        submissionSuccess &&
        setData({
            Name: '', Institute: '', Department: '', Year_of_study: '',
            Passed: '', Phone: '', Email: '',
            Street: '', City: '', Zip: '',
            Q1: '', Q2: '', Q3: '', Q4: '', Facebook: '', LinkedIn: '', Twitter: '', profile: ''
        })
    }, [submissionSuccess])

  return (
    <div className='site-container p-[20px] sm:p-[80px]'>
        <h1 className='text-2xl text-center md:text-3xl mb-1 sm:mb-2 font-semibold'>
            <span className='text-yellow'>Campus Ambassador</span> Application Form
        </h1>
        <p className='text-center font-Averta text-white/90 mb-10'>Please fill out all the details</p>
        <div className='bg-black w-full lg:w-[70%] h-[100vh] overflow-auto mx-auto p-6 sm:p-12 rounded-md border border-gray space-y-4'>
            <h3 className='font-Poppins text-xl mb-3'>Personal Information</h3>
            <input value={data.Name} onChange={e => setData({...data, Name: e.target.value})} className={styles.input} placeholder="Full Name" />
            <input value={data.Institute} onChange={e => setData({...data, Institute: e.target.value})} className={styles.input} placeholder="Institute Name" />
            <input value={data.Department} onChange={e => setData({...data, Department: e.target.value})} className={styles.input} placeholder="Department Name" />
            <input type='number' value={data.Year_of_study} onChange={e => setData({...data, Year_of_study: e.target.value})} className={styles.input} placeholder="Year of Study" />
       
            <div className='flex flex-col md:flex-row gap-6'>
                <PhoneInput value={data.Phone} onChange={value => setData({...data, Phone: value})} countries={['BD']} addInternationalOption={false}  defaultCountry="BD" placeholder='018XXXXXXXX' className={styles.input} />
                <input value={data.Email} onChange={e => setData({...data, Email: e.target.value})} className={styles.input} placeholder="Email Address" />
            </div>

            <h3 className='font-Poppins text-xl my-3'>Address</h3>
            <input value={data.Street} onChange={e => setData({...data, Street: e.target.value})} className={styles.input} placeholder="Street Address" />
            <div className='flex flex-col md:flex-row gap-6'>
                <input value={data.City} onChange={e => setData({...data, City: e.target.value})} className={styles.input} placeholder="City" />
                <input value={data.Zip} onChange={e => setData({...data, Zip: e.target.value})} className={styles.input} placeholder="Zip Code" />
            </div>
            <textarea value={data.Q1} onChange={e => setData({...data, Q1: e.target.value})} rows='5' placeholder='How would you promote our organisation on campus and in your community?' className={styles.input}></textarea>
            <textarea value={data.Q2} onChange={e => setData({...data, Q2: e.target.value})} rows='5' placeholder='What do you hope to gain from being a campus ambassador for our organisation?' className={styles.input}></textarea>
            <textarea value={data.Q3} onChange={e => setData({...data, Q3: e.target.value})} rows='5' placeholder='Why are you joining to this Campus Ambassador Program?' className={styles.input}></textarea>
            <textarea value={data.Q4} onChange={e => setData({...data, Q4: e.target.value})} rows='5' placeholder='Is there anything else you would like us to know about you that might be relevant to this role?' className={styles.input}></textarea>
    
            <input value={data.Facebook} onChange={e => setData({...data, Facebook: e.target.value})} className={styles.input} placeholder="Facebook Profile" />
            <input value={data.LinkedIn} onChange={e => setData({...data, LinkedIn: e.target.value})} className={styles.input} placeholder="LinkedIn Profile (Optional) " />
            <input value={data.Twitter} onChange={e => setData({...data, Twitter: e.target.value})} className={styles.input} placeholder="Twitter Profile (Optional)" />

            <div className='flex sm:flex-row flex-col sm:items-center sm:gap-4 sm:pb-0 pb-4'>
                <h3 className='font-Poppins text-xl my-3'>Your Picture</h3>
                <input onChange={e => setData({...data, profile: e.target.files[0]})} type="file" accept="image/png, image/gif, image/jpeg"/>
            </div>


            <button onClick={submitForm} disabled={isLoading} type='submit' className='bg-blue font-Poppins rounded-full text-sm cursor-pointer sm:w-32 w-full py-[10px] disabled:cursor-not-allowed'>
               {
                isLoading ?
                <ScaleLoader height={10} color='white' />
                : 
                'SUBMIT'
               }
            </button>
        </div>
    </div>
  )
}

const styles = {
    input: 'w-full bg-transparent outline-none border border-gray p-3 rounded-md',
    subheading: 'text-2xl text-green',
    description: 'text-white/80'

}

export default Ambassador