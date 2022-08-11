import React from 'react'
import NavButtons from './Navbuttons'
import Language from './Languages'
import NavButton from './Navbutton'
import './style.scss'

const NavItems = () => {
  return (
    <div className='nav-items'>
    <NavButtons/>
    <Language/>
    <NavButton/>
    </div>
  )
}

export default NavItems