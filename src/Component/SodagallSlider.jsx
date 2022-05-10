import React from "react";
import "./SodagallSlider.css";
import Slider from "react-slick";
import image1 from '../Assests/LEMON.png'
import image2 from '../Assests/JEERA.png'
import image3 from '../Assests/REGULAR.png'
import {BsFillSquareFill} from 'react-icons/bs'

const SodagallSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 2000,
      };

  return (
    <>
      <div className="sodagslider-main-cont">
          <div className="sodagslider-row row" style={{margin:'0'}}>
              <div className="sodagslider-col-first col col-lg-4 col-md-12 col-sm-12">
                  <div className="sodagslider-subfirst">
                  <BsFillSquareFill className="rect-icon1"/> LEMON<br/>
                  <BsFillSquareFill className="rect-icon2"/> JEERA MASALA<br/>
                  <BsFillSquareFill className="rect-icon3"/> REGULAR
                  </div>
              </div>
              <div className="sodagslider-col-second col col-lg-8 col-md-12 col-sm-12">
            <Slider {...settings}>
            <div className="sodagslider-img-cont1">
                <div className="sodagslider-img">
                <img src={image1} alt="" />
                </div>
              </div>

              <div className="sodagslider-img-cont2">
                <div className="sodagslider-img">
                <img src={image2} alt="" />
                </div>
              </div>

              <div className="sodagslider-img-cont3">
                <div className="sodagslider-img">
                <img src={image3} alt="" />
                </div>
              </div>
            </Slider>
            </div>
          </div>
          </div>
    </>
  );
};

export default SodagallSlider;
