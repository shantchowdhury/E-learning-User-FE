import Marquee from "react-fast-marquee";
import { useSelector } from 'react-redux';

const Sponsorships = () => {
    const {sponsors} = useSelector(state => state.app);

    return (
        sponsors.length > 0 && 
        <div className='site-container lg:py-16 md:mt-0 lg:px-[80px]'>
              <Marquee speed={60}  gradient={false}>  
                {
                    sponsors.map(item => {
                        return <img key={item._id} className='mx-5 sm:mx-10 w-28' src={`https://storage.googleapis.com/nonacademy-essential-images/${item.image}`} />
                    })
                }  
              </Marquee>
        </div>
    );
}

export default Sponsorships;
