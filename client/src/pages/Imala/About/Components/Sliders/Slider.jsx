import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Villa1 from './images/villa1.jpg';
import Villa2 from './images/villa2.jpg';
import Villa3 from './images/villa3.jpg';

export default function Slider() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={Villa1} alt="Villa 1" />
        </div>
        <div>
          <img src={Villa2} alt="Villa 2" />
        </div>
        <div>
          <img src={Villa3} alt="Villa 3" />
        </div>
        {/* Ajoutez autant de diapositives que nécessaire */}
      </Slider>

      <div className="slider-buttons">
        <button onClick={handlePrev}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
      </div>
    </div>
  );
}
