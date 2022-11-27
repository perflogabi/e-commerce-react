import React from 'react'
import { SlideCard } from './SlideCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slider = () => {
  return (
    <div>
        <section className='homeSlide contentWidth'>
            <div className="container">
                  <SlideCard /> 
                
            </div>
        </section>
    </div>
  )
}
