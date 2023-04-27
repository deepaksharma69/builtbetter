import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div class="header_section">
         <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <div class="logo">
                 
                  <NavLink exact   to='/' >
                     
                     <img src="images/logo.png" /></NavLink>  </div>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                        <NavLink exact  className="nav-link" to='/' >Home</NavLink>
                     </li>
                     <li class="nav-item">
                        <NavLink exact  className="nav-link" to='/Services' >Services</NavLink>
                     </li>
                     <li class="nav-item">
                        <NavLink exact  className="nav-link" to='/About'>About</NavLink>
                     </li>
                     <li class="nav-item">
                       
                        <NavLink exact  className="nav-link" to='/Shop' >Shop</NavLink>
                     </li>
                     <li class="nav-item">
                        
                        <NavLink exact  className="nav-link" to='/Contact' >Contact</NavLink>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                     <h1 class="call_text">Call Us : +01 1234567890</h1>
                  </form>
                  <div class="search_icon">
                     <ul>
                        <li><a href="#"><img src="images/search-icon.png" /></a></li>
                        <li><a href="#">LOGIN</a></li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      </div>
    
    </>
  )
}

export default Header