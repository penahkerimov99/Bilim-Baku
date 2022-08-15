import React from 'react'
import NavButtons from './Navbuttons'
import Language from './Languages'
// import NavButton from './Navbutton'
import './style.scss'
import { Button } from '../shared'

const NavItems = () => {
  return (
    <div className='nav-items'>
    <NavButtons/>
    <Language/>
    {/* <NavButton/> */}
    <Button/>
    </div>
  )
}

export default NavItems