import React from 'react';
import '../assets/styles/components/Slider.scss';

const Slider = ( {children} ) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>

)

export default Slider;