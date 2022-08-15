import React from 'react'
import NavButtons from './Navbuttons'
import Language from './Languages'
import './style.scss'
import { Button } from '../shared/Button'

const NavItems = () => {
  return (
    <div className='nav-items'>
    <NavButtons/>
    <Language/>
    <Button/>
    
    </div>
  )
}

export default NavItems