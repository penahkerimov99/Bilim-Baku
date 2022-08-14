import React from 'react'
import './style.scss'

export const TraningLink = ({link1, link2}) => {
  return (<div className='traning-links'>
    <a className='link1'>{link1}</a> 
    <a className='link2' href=""><i class={link2}>Narrow</i></a> 
   </div> 
  )
}
