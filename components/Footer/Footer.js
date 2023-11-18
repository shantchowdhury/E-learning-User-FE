import {
  AiOutlineTwitter,
  AiOutlineYoutube
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
// import logo from '../../images/nonacademy_logo.png';
import Link from 'next/link';
import moment from 'moment';
import { toast } from 'react-hot-toast';


const Footer = () => {

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        {/* col-1 */}
        <div>
          <Link href="/" className={style.logo}>
            <img src="/assets/images/nonacademy_logo.png" alt="Logo" className='sm:w-[150px] w-[130px]' />
          </Link>
          <p className='text-white/80 font-light text-[15px] leading-relaxed'>
            NonAcademy is one of Bangladesh's fastest growing student community that
            provides a one-stop platform for students to learn new skills,
            network with peers, and grow as an individual.
          </p>
        </div>

        {/* col-2 */}
        <div className='sm:justify-self-end sm:mr-[130px] lg:mr-[80px]'>
          <h2 className={style.heading}>
            Company
          </h2>
          <Link href="/about" className={style.link}>
            About
          </Link>
          <Link href="#" className={style.link}>
            Privacy Policy
          </Link>
          <Link href="#" className={style.link}>
            Terms & Conditions
          </Link>
          <Link href="#" onClick={() => toast.success('Coming soon', {icon: '⭕'})} className={style.verify}>
            Verify Certificate
          </Link>
        </div>

        {/* col-3 */}
        <div className='pl-0 lg:pl-[50px]'>
          <h2 className={style.heading}>
            other links
          </h2>
          <Link href="/blog" className={style.link}>
            Blogs
          </Link>
          <Link href="/events" className={style.link}>
            events
          </Link>
          <Link href="/wall-of-love" className={style.link}>
            wall of love
          </Link>
          <Link href="/contact" className={style.link}>
            Contact Us
          </Link>
        </div>

        {/* col-4 */}
        <div className='sm:justify-self-end lg:justify-self-start'>
          <h2 className={style.heading}>
            contact us
          </h2>
          <a href="mailto:nonacademy.net@gmail.com" className={style.email}>
            nonacademy.net@gmail.com
          </a>
          <div className={style.socialContainer}>
            {/* twitter */}
            <a href="#" className={style.socialLink}>
              <AiOutlineTwitter />
            </a>
            {/* linkedin*/}
            <a href="https://www.linkedin.com/company/nonacademy/mycompany" target='blank' className={style.socialLink}>
              <FaLinkedinIn />
            </a>
            {/* youtube */}
            <a href="https://www.youtube.com/c/NonAcademyMain" target='blank' className={style.socialLink}>
              <AiOutlineYoutube />
            </a>
            {/* facebook */}
            <a href="https://www.facebook.com/groups/nonacademy" target='blank'  className={style.socialLink}>
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className={style.copyRight}>
        <div className='site-container flex sm:flex-row flex-col justify-center items-center gap-2 sm:gap-5'>
            <Link href='/'>Terms and Agreements</Link>  
            <Link href='/'>Privacy Policy</Link>  
            <p>Copyright © 2022 - {moment().format('YYYY')} <span className='text-blue'>Non</span>Academy.org</p>  
        </div>
      </div>
    </footer>
  );
};

const style = {
  footer: 'bg-gradient-to-t from-black to-dark text-sm pt-5',
  container: 'site-container space-y-5 pb-10  grid  sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:-px-4',
  logo: 'block mb-5',
  link: 'text-white/80 font-light block w-fit font-Poppins text-sm hover:text-pink hover:underline duration-300 mb-2 capitalize',
  socialLink : 'mr-5 rounded-full hover:text-blue duration-300 border border-green p-2 text-sm text-green hover:bg-green hover:text-dark',
  heading: 'block font-semibold text-lg uppercase mb-3 lg:mb-6',
  verify: 'bg-green w-max text-dark mt-3 px-2 py-[2px] rounded block text-center font-Poppins text-[13px]',
  email: 'text-white/80 hover:underline hover:text-pink font-Poppins font-[300] duration-300 text-sm',
  socialContainer: 'flex items-center mt-5 text-xl w-10/12',
  copyRight: 'py-3 text-white/80 border-t border-white/10'
};

export default Footer;
