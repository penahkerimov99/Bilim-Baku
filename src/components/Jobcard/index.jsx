import React from 'react'
import './style.scss'
import {TraningLogo} from '../TraningLogo'
import {TraningDescription} from '../TraningDescription'
import { TraningAbout } from '../TraningAbout'

export const Jobcard = ({logo, description , about}) => {
  
  return (<div className='jobcard'>
    <TraningLogo logo = {logo}/>
    <TraningDescription description = {description}/> 
    <TraningAbout about = {about} />
     </div>
  )
}
