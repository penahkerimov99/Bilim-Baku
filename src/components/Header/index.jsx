import React from 'react'
import Navbar from '../Navbar';
import "./style.scss"
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className='header'>
    <div className="header-logo">
      <Link to={"/"}><img src="./assets/navLogo.png" alt="header-logo" /></Link>
    </div>
    <Navbar/>
    </div>
  )
}

export default Header