import {useEffect} from 'react';
import Content from '../../components/Contact/Content';
import Form from '../../components/Contact/Form';
import GenerateTitle from '../../GenerateTitle';

function Contact() {
  useEffect(() => GenerateTitle('NonAcademy - Contact us'), []);

  return (
    <div className='site-container lg:py-0 py-10 px-5 sm:px-[40px] lg:px-[80px] 2xl:px-[180px] flex items-center min-h-screen'>
        <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-8'>
            <Content />
            <Form />
        </div>
    </div>
  )
}



export default Contact