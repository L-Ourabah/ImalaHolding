import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import appartement1 from '../../media/images/appartement1.jpg'
import appartement2 from '../../media/images/appartement2.jpg'
import appartement3 from '../../media/images/appartement3.jpg'
import './Slider.css'

function Slider() {

  const Data = [
    {
      id: 1,
      image: appartement1
    },
    {
      id: 1,
      image: appartement2
    },
    {
      id: 1,
      image: appartement3
    },
  ]

  return (
    <Carousel infiniteLoop emulateTouch>
      {Data.map(slide =>(
        <div key={slide.id} className='slider-images-container'>
          <img src={slide.image} alt='' className='slider-images'/>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider