import React from 'react'
import './Option.css'
import img1 from '../Assests/scroller-image1.png'
import img2 from '../Assests/scroller-image2.png'
import img3 from '../Assests/scroller-image3.png'
import img4 from '../Assests/scroller-image4.png'
import Slider from "react-slick";



const Option = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <>
      <div className="option-main-cont">
            <div className="option-wrap">
          <Slider {...settings}>
            <div className='option-slider-wrap'>
            <div className="option-text">
              <h3>Gas Relief</h3>
              </div>
              <div className="option-img-cont">
                <div className="option-img">
                <img src={img1} alt="" />
                </div>
              </div>
              </div>

              <div className='option-slider-wrap'>
            <div className="option-text">
              <h3>Initial Symptom Of Acidity</h3>
              </div>
              <div className="option-img-cont2">
                <div className="option-img">
                <img src={img2} alt="" />
                </div>
              </div>
              </div>

              <div className='option-slider-wrap'>
            <div className="option-text">
              <h3>Health Diet</h3>
              </div>
              <div className="option-img-cont">
                <div className="option-img">
                <img src={img3} alt="" />
                </div>
              </div>
              </div>

              <div className='option-slider-wrap'>
            <div className="option-text">
              <h3>Supportive Ingredients</h3>
              </div >
              <div className="option-img-cont4">
                <div className="option-img">
                <img src={img4} alt="" />
                </div>
              </div>
              </div>
                </Slider>
            </div>

          </div>
      </>
  )
}

export default Option