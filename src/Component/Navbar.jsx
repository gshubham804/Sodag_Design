import React from 'react'
import './Navbar.css'
 
const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-main-cont">
  <div className="navbar-brand navbar-brand-img">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </div>

  <div class="collapse navbar-collapse navbar-li-cont" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        
    <li class="nav-item active li-slant">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active li-slant">
        <a class="nav-link" href="#">Products <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active li-slant">
        <a class="nav-link" href="#">About<span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active li-onesideslant">
        <a class="nav-link" href="#">Contact us <span class="sr-only">(current)</span></a>
      </li>
      
      
     
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar