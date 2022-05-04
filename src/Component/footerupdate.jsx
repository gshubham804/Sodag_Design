import React from 'react'
import './footerupdate.css'
import {RiInstagramLine} from 'react-icons/ri'
import {RiYoutubeFill} from 'react-icons/ri'
import {RiFacebookFill} from 'react-icons/ri'

const footerupdate = () => {
  return (
      <>
    <div className="footerup-main-cont">
        <div className="horizontal-line"></div>
        <div className="footerup-row row" style={{margin:'0'}}>
            <div className="foooter-col-first col-lg-4 col-md-4 col-sm-12 col-xm-12">
            <div className="footer-first-col-wrap">
            <div className="footer-product">
                    <h4>PRODUCTS</h4>
                </div>
                <div className='footer-product-sub'>
                    <p>sodaG Fruit Salt</p>
                    <p>sodaG Fruit Salt</p>
                    <p>sodaG Fruit Salt</p>
                </div><div className="footer-discover">
                    <h4>Discover sodaG</h4>
                </div>
                <div className='footer-discover-sub'>
                    <p>How sodaG Work</p>
                    <p>Our Story</p>
                    <p>Latest Compaigns</p>
                </div>
                </div>
            </div>
            <div className="foooter-col-second col-lg-4 col-md-4 col-sm-12 col-xm-12">
            <div className="footer-icons">
                    <RiFacebookFill/>
                    <RiYoutubeFill/>
                <RiInstagramLine/>
                </div>
            </div>
            <div className="foooter-col-third col-lg-4 col-md-4 col-sm-12 col-xm-12">
            <div className="footer-third-col-wrap">
                <div className="footer-contact">
                    <h4>CONTACT US</h4>
                </div>
                <div className='footer-contact-sub'>
                    <p>Contact us</p>
                    <p>Frequently Asked Question</p>
                    <p>Where To Buy</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default footerupdate