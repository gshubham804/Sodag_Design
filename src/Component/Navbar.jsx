import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
 
const Navbar = () => {
  return (
    <>
    <div class="BG">
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo"><div className="nav-logo"></div></label>

      <ul>
        <li><a class="active" href="#">HOME</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">ABOUT</a></li>
        <li className='last-option'><a href="#">CONTACT US</a></li>
      </ul>
    </nav>

  </div>
    </>
  )
}

export default Navbar