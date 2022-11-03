import React from 'react'
import './navbar.css'
import {GrMenu, GrClose} from 'react-icons/gr'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <p><a href="/advocates">Advocate List</a></p>
          <p><a href="/follow">Follow</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar