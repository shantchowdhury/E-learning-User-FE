import { useEffect } from 'react';
import {Navigate} from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import {useDispatch, useSelector} from 'react-redux'
import { fetchUser } from '../../app/authservice/authActions';

function Protected({Component}) {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(function(){
    dispatch(fetchUser());
  }, [dispatch])
  return (
    <>
        {
            user !== null ? <Component /> : <Navigate to='/signIn' />
        }
    </>
  )
}

export default Protected