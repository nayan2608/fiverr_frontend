
import React from 'react'
import Slider from 'infinite-react-carousel';
import "./Slide.scss"

const Slide = ({children, content, slidesToShow, arrowsScroll}) => {
  return (
    <div className='slide'>
        <div className="container">
            <h1>{content}</h1>
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide;