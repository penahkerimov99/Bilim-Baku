import React from 'react'
import './style.scss'


const Text = ({variant, children}) => {
  return (
    <span className={variant}>
    {children}
    </span>
  )
}

export default Text