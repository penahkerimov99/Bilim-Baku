import React from 'react'
import './style.scss'
import {TraningLogo} from '../TraningLogo'
import {TraningDescription} from '../TraningDescription'
import { TraningAbout } from '../TraningAbout'
import { TraningLink } from '../TraningLink'

export const Jobcard = ({logo, description , about, bgImg, linkone, linktwo}) => {
  
  return (<div className='jobcard' style={{background:bgImg}}>
    <TraningLogo logo = {logo}/>
    <TraningDescription description = {description}/> 
    <TraningAbout about = {about} />
    <TraningLink link1 = {linkone} link2= {linktwo}/>
    
     </div>
  )
}
