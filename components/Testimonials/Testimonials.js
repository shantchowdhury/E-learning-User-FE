import React, {useEffect} from 'react';
import TestimonialsTextpart from './Testimonials-TextPart';
import TestimonialsCardpart from './Testimonials-CardPart';
import GenerateTitle from '../../GenerateTitle';

const Testimonials = () => {
    useEffect(() => GenerateTitle('NonAcademy - Wall of Love'), [])

    return (
       <React.Fragment>
            <TestimonialsTextpart/>
            <TestimonialsCardpart/>
       </React.Fragment>
    );
}

export default Testimonials;
