import React from 'react'
import './style.scss'

export const TraningLink = ({link1, Color}) => {
  return (<div className='traning-links'>
    <a className='link1' style={{color:Color}}>{link1}</a> 
    <a className='link2' style={{color:Color}} href=""><i className="fa-solid fa-share"></i></a> 
   </div> 
  )
}
