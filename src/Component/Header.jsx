import React from 'react'
import './Header.css'
import Slider from "react-slick";
import img1 from '../Assests/front-1.png'
import img2 from '../Assests/front-2.png'
import img3 from '../Assests/front-3.png'

const Header = () => {
    const settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        speed: 2000,
        autoplaySpeed: 2000,
      };
  return (
    <>
<div className='header-main-cont'>
  <div className="header-main-wrap">
        <Slider {...settings}>
            <div className="header-img-cont">
              <div className="header-img-wrap">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="header-img-cont">
              <div className="header-img-wrap">
                <img src={img2} alt="" />
              </div>
            </div>

            <div className="header-img-cont">
              <div className="header-img-wrap">
                <img src={img3} alt="" />
              </div>
            </div>

        </Slider>
        </div>
        </div>
    </>
  )
}

export default Header