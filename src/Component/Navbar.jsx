import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <>
    <div class="BG">
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <a class="active" href="/home"> <label class="logo"><div className="nav-logo"></div></label></a>

      <ul>
        <li><a class="active" href="/home">HOME</a></li>
        <li><a href="/sodagall">PRODUCTS</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li className='last-option'><a href="#">CONTACT US</a></li>
      </ul>
    </nav>

  </div>
    </>
  )
}

export default Navbar