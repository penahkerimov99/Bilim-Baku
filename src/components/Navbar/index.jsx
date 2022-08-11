import React from 'react'
import "./style.scss"
import Navlogo from '../Navbarlogo'
import NavItems from '../Navitems'



const Navbar = () => {
  return (
    <div className='navBar'>
     <Navlogo/>
     <NavItems/>
    </div>
  )
}

export default Navbar