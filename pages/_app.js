import '@/styles/globals.css'
import { Provider, useDispatch } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import store from '@/redux/store';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-phone-number-input/style.css';
import "nprogress/nprogress.css";
import '../dist/output.css';
import nprogress from "nprogress";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import ScrollToTop from '@/components/Scroll/ScrollToTop';
import Footer from '@/components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Layout from '@/components/Layout/Layout';
export default function App({ Component, pageProps }) {
  const router=useRouter()

  
  

  useEffect(() => {
    
    nprogress.start();
    nprogress.done();
  }, [router.pathname]);

  
  return <>
  <Provider store={store} >
    <GoogleOAuthProvider clientId='505178736599-kdogkfkeots777ofe60ocmoq4dc7j181.apps.googleusercontent.com'>
      <ScrollToTop/>
      <Header/>
  
  {
    router.asPath?.includes('dashboard') ?
    <Layout children={<Component {...pageProps} />}/>
    :
    <Component {...pageProps} />
  }
  <Footer />

            <Toaster 
              position="bottom-right"
              toastOptions={{
                style: {
                  background: '#09142B',
                  color: '#fff',
                  border: '1px solid #00ffff20',
                },
                duration: 4000,
              }}
            />
  </GoogleOAuthProvider>
  </Provider>
  </>
  
}
