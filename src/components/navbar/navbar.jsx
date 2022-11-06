import {
  Link
} from "react-router-dom";
import React, {useState} from 'react'
import './navbar.css'
import {GrMenu, GrClose} from 'react-icons/gr'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='navbar'>

      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Link to={"/advocates"}> 
            <li>Advocate List</li> 
          </Link>
          <Link to={"/follow"}>
            <li>Follow List</li> 
          </Link>
        </div>
      </div>
      <div className="navbar-links_api">
        <p><a href="https://cados.up.railway.app" target="_blank" rel="noopener noreferrer">
              Get Users Data
            </a>
        </p>
      </div>
      
      <div className="navbar-menu">
        {toggleMenu
          ? <GrClose size={27} onClick={() => setToggleMenu(false)} />
          : <GrMenu size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-link'>
              <Link to={"/advocates" }> 
                <li onClick={() => setToggleMenu(false)}>Advocate List</li> 
              </Link>
              <Link to={"/follow"}>
                <li onClick={() => setToggleMenu(false)}>Follow List</li> 
              </Link>
              <p><a href="https://cados.up.railway.app" 
                    target="_blank" rel="noopener noreferrer" 
                    id='api_link'
                    onClick={() => setToggleMenu(false)}>
                Get Users Data
              </a>
          </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar