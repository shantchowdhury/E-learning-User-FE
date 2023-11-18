import toast from 'react-hot-toast';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {IoMdLink} from 'react-icons/io';
import BarLoader from 'react-spinners/BarLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {useSelector, useDispatch} from 'react-redux';
import { cvUpload,cvDelete } from '@/redux/authservice/authActions';

function CvUpload() {
  const {user, cvLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const uploadCV = function(e){
    const file = e.target.files[0];
    if(file && file.size > (5 * 1024 * 1024)) return toast.error('Maximum allowed file size 5MB');
    const formData = new FormData();
    formData.append('cv', file);
    dispatch(cvUpload(formData));
  }

  return (
    <div>
      <h2 className='font-Poppins uppercase mb-10 xl:mb-14'>Upload Your CV or Resume</h2>
    
      {
        user?.CV ?
          (<div>
              <div className='flex items-center h-12'>
                <p className='bg-white text-dark flex-1 rounded-l-md h-full flex items-center px-4'>CV uploaded</p>
                <button onClick={() => dispatch(cvDelete())} className='bg-danger w-24 sm:w-40 h-full rounded-r-md'>
                  {
                    cvLoading ?   <ScaleLoader height={14} color="white" /> : 'Delete'
                  }
                </button>
              </div>

              <a target='blank' href={`https://storage.googleapis.com/nonacademy-students-cv/${user?.CV}`} className='flex items-center mt-3 font-light text-green/80 w-max gap-2 rounded-md font-Poppins text-sm'>
                <IoMdLink size={20}/>
                <p>View Resume</p>
              </a>
            </div>
              
          )
          :
          (
            <div>
              <input onChange={uploadCV} name="cv" type="file" className='hidden' id='cv' accept="application/pdf" />
              <label htmlFor='cv' className={`${cvLoading ? 'border-b-0 pointer-events-none' : ''} border-2 block sm:text-lg py-10 text-center border-yellow/80 cursor-pointer hover:border-orange`}>
                  <BsFillPlusCircleFill size={40} className="mx-auto mb-6 text-white/90"/>
                  <p className='text-white/90'>
                    {
                      cvLoading ? 'Uploading' : 'Browse File to Upload (.pdf)'
                    }
                  </p>
              </label>
              {
                cvLoading && <BarLoader width={'100%'} height={2.3} color="#f5d242" /> 
              }
            </div>  
          )
      }
    </div>
  )
}



export default CvUpload