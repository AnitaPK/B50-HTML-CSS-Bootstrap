import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/card">Cards</Link>
        <Link class="nav-link" to="/contact">Contact Us</Link>
        <Link class="nav-link " to="/about">About Us</Link>
        <Link class='nav-link' to='/userData' >Fetch API</Link>
        <Link class='nav-link' to='/axiosData' >Fetch API axiosData</Link>

        
      </div>
    </div>
  </div>
</nav> 
    </>
  )
}

export default Navbar
