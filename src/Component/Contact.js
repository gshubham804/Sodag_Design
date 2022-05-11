import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="main-container">
        <div className="contact-first">
          <p>CONTACT US</p>
        </div>
        <div className="contact-second">
           
          <div className="box">
            <div className="input-container">
              <h4 style={{color:'white'}}>SODA-G Products information Or Updates</h4>
              <input type="text" placeholder="First Name" style={{color:'white'}}/>
              <input type="text" placeholder="Last Name" style={{color:'white'}} />
              <input type="text" placeholder="Email"  style={{color:'white'}}/>
              <input type="text" placeholder="Subject" style={{color:'white'}} />
              <input type="text" className='description'placeholder="Description" style={{color:'white'}} />
              <p style={{color:'white'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                libero sint repellendus quibusdam dicta tempore saepe illum,
                vero ex dolor?
              </p>
              <p style={{color:'white'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti porro recusandae saepe natus iste maiores tempore, sed
                voluptate eius beatae!
              </p>
              <button type="button" class="btn btn-outline custom-btn">Submit</button>
            </div>
          </div>
       
        </div>
        <div className="contact-third">
            <div>
          <p className="para-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
            dignissimos voluptatum quaerat libero
            itaque culpa magnam tempora enim non blanditiis deserunt? Corporis
            ducimus voluptatibus consequuntur possimus.
          </p>
          <p className="para-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            fugit nam. Possimus ad perspiciatis  libero illo
            necessitat. Sequi, iste qui rerum saepe perferendis cum beatae
            consectetur tenetur ullam atque iusto doloribus dicta a quisquam
            iure?
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
