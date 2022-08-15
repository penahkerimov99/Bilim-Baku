import React from 'react'
import { Section2About } from './Section2About/about'
import { Section2View } from './Section2View/view'
import './style.scss'

export const Section2 = () => {
  return (
    <div className='section2'>
       <Section2View />
       <Section2About/>
    </div>
  )
}
