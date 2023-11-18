import Testimonial from '../Home/Testimonial';
import { useSelector } from 'react-redux';

const TestimonialsCardpart = () => {
    const {testimonials} = useSelector(state => state.app);

    return (
        <div>
          <section className='sm:p-12'>
            <div className="site-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">  
                    {
                        [...testimonials].reverse().map(item => {
                            return <div key={item._id}><Testimonial testimonial={item}/></div>
                        })
                    }
                </div>
            </div>
          </section>
        </div>
    );
}

export default TestimonialsCardpart;
