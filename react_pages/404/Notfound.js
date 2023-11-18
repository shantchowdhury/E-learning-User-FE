import {useEffect} from 'react';
import errorImg from '../../images/404.png';
import GenerateTitle from '../../GenerateTitle';

function Notfound() {
  useEffect(() => GenerateTitle('NonAcademy - 404 Not Found'), [])

  return (
    <div className='h-[60vh] flex justify-center items-center'>
      <img src={errorImg} alt="Page not found" />
    </div>
  )
}

export default Notfound