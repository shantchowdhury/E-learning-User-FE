import { useRouter } from 'next/router';
import {useEffect} from 'react';


function ScrollToTop() {
    const location = useRouter()

    useEffect(function(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [location])

  return null;
}

export default ScrollToTop