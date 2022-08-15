import React from 'react'
import NavButtons from './Navbuttons'
import Language from './Languages'
<<<<<<< HEAD
import './style.scss'
import { Button } from '../shared/Button'
=======
// import NavButton from './Navbutton'
import './style.scss'
import { Button } from '../shared'
>>>>>>> b3ad1d9c4a8119bf82a3fb1f8062b922169d1d1d

const NavItems = () => {
  return (
    <div className='nav-items'>
    <NavButtons/>
    <Language/>
<<<<<<< HEAD
    <Button/>
    
=======
    {/* <NavButton/> */}
    <Button/>
>>>>>>> b3ad1d9c4a8119bf82a3fb1f8062b922169d1d1d
    </div>
  )
}

export default NavItems