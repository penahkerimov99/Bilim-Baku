import React from 'react'
import './style.scss'
import {TraningLogo} from '../TraningLogo'
import {TraningDescription} from '../TraningDescription'
import { TraningAbout } from '../TraningAbout'

export const Jobcard = (id, logo, title, about) => {
  return (<div className='jobcard'>
    <TraningLogo logo = {logo}/>
    <TraningDescription text = {title}/> 
    <TraningAbout about = {about} /> </div>
  )
}
