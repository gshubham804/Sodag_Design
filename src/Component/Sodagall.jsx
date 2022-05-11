import React from "react";
import Sodagall from "./Sodagall.css";
import SodagallSlider from "./SodagallSlider";
import image1 from '../Assests/LEMON.png'
import image2 from '../Assests/JEERA.png'
import image3 from '../Assests/REGULAR.png'

const Sodag = () => {
  return (
    <>
      <div className="sodagall-main-cont">
        <div className="sodagall-top">
          <h5>Soda G All Products</h5>
          <p>by Welable Pharma</p>
        </div>

        <div className="sodagall-mix">
          <div className="sodagall-mix-first"></div>
          <div className="sodagall-mix-bgimg">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
          <div className="sodagall-mix-second">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab natus
              hic vero sit consectetur modi.
            </p>
          </div>
        </div>

        <div className="cut-polygon"></div>

        <SodagallSlider />
        <div className="sodagall-hor">
          <div className="sodag-flat-line">
            <h5>How Soda-G Works?</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia
            consequatur a ab error doloribus quos autem, ipsum alias, non et
            eaque nobis optio totam blanditiis, eligendi aliquam quo. Odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia
            consequatur a ab error doloribus quos autem, ipsum alias, non et
            eaque nobis optio totam blanditiis, eligendi aliquam quo. Odio?
          </p>
        </div>

        <div className="sodagall-hor">
          <div className="sodag-flat-line">
            <h5>How Soda-G Works?</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia
            consequatur a ab error doloribus quos autem, ipsum alias, non et
            eaque nobis optio totam blanditiis, eligendi aliquam quo. Odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia
            consequatur a ab error doloribus quos autem, ipsum alias, non et
            eaque nobis optio totam blanditiis, eligendi aliquam quo. Odio?
          </p>
        </div>

        <div className="sodagall-hor">
          <div className="sodag-flat-line">
            <h5>How Soda-G Works?</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia
            consequatur a ab error doloribus quos autem, ipsum alias, non et
            eaque nobis optio totam blanditiis, eligendi aliquam quo. Odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia
            consequatur a ab error doloribus quos autem, ipsum alias, non et
            eaque nobis optio totam blanditiis, eligendi aliquam quo. Odio?
          </p>
        </div>

        <div className="sodagall-hor">
          <div className="sodag-flat-line">
            <h5>How Soda-G Works?</h5>
          </div>

          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, unde.
          </li>
        </div>
      </div>
    </>
  );
};

export default Sodag;
