import React from 'react'
import NavButtons from './Navbuttons'
import Language from './Languages'
import {Button} from "../shared/Button"
import "./style.scss"

const NavItems = () => {
  return (
    <div className='nav-items'>
    <NavButtons/>
    <Button children='EN' bg_variant='b-lightb' col_variant='c-purple' />
    <Button/>
    </div>
  )
}

export default NavItems