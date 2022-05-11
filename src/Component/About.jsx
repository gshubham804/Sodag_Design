import React from "react";
import "./About.css";
import image1 from '../Assests/LEMON.png'
import image2 from '../Assests/JEERA.png'
import image3 from '../Assests/REGULAR.png'

const About = () => {
  return (
    <>
      <div className="about-main-cont">
        <div className="about-top">
          <h5>Soda G All Products</h5>
          <p>by Welable Pharma</p>
        </div>

        <div className="about-first-cont">
          <div className="about-first-first-cont">
            <h4>The Beginning</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              quibusdam odit quam nam temporibus itaque quia eos vel pariatur
              eaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, blanditiis!
            </p>
          </div>

          <div className="about-first-second-cont">
            <h4>The Breakthrough</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              accusamus laudantium, molestiae quam veniam id unde voluptate
              quibusdam porro doloremque aperiam quidem. Neque similique ipsa
              illum odit sapiente totam impedit.
            </p>
          </div>
        </div>

        <div className="about-second-cont">
          <div className="about-circle">Founder Photo</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            suscipit quod vitae totam rerum repudiandae vero id aspernatur
            inventore exercitationem!
          </p>
        </div>

        <div className="about-third-cont">
            <div className="about-third-cont-head">
               <h4> Products </h4>
                </div>
                <div className="about-third-cont-bgimg">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            numquam ipsa totam illum sequi fugiat ab error quam doloribus fugit
            incidunt quo vero tempora consequuntur temporibus ipsam
            voluptatibus, dolore explicabo impedit cupiditate molestiae
            blanditiis beatae? Dignissimos odio asperiores sint sit earum aut id
            non dicta delectus natus! Quos, dolores quas.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
