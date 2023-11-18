import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';

function Content() {
  return (
    <div className='space-y-5'>
        <div>
            <p className='text-green mb-2 font-Poppins'>Contact Us</p>
            <h1 className='text-[20px] text-white sm:text-2xl md:text-3xl font-semibold'>
                Get in Touch With Us
            </h1>
        </div>
        <p className='sm:text-[18px] mb-10 text-white/90 pr-20'>
            Need to get in touch with us? Either fill out the form
            with your inquiry or mail your query to our NonAcademy official email address.
        </p>
        <div className='space-y-5 sm:space-y-8 pt-5'>
            <div className={styles.infoContainer}>
                <div className={styles.iconContainer}>
                    <AiOutlineHome size={22} />
                </div>
                <div>
                    <h3 className={styles.infoHeading}>Our Location</h3>
                    <p className={styles.infoPara}>Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.iconContainer}>
                    <BsTelephone size={20} />
                </div>
                <div>
                    <h3 className={styles.infoHeading}>Phone Number</h3>
                    <p className={styles.infoPara}>09638-100303</p>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.iconContainer}>
                    <MdOutlineEmail size={22} />
                </div>
                <div>
                    <h3 className={styles.infoHeading}>Email Address</h3>
                    <p className={styles.infoPara}>nonacademy.net@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

const styles = {
    infoContainer: 'flex gap-5',
    iconContainer: 'w-12 h-12 rounded-md bg-cyan flex items-center justify-center',
    infoHeading: 'font-Poppins sm:text-lg',
    infoPara: 'text-white/80'
}

export default Content