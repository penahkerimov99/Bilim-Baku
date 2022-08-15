import React from 'react'
import "./style.scss"

export const Button = ({ children = "Qeydiyyat", size = "s-size",  bg_variant = "b-purple", col_variant = "c-white" , bor_variant = "none"}) => {
  return (
    <button className={`button ${bg_variant} ${col_variant} ${bor_variant} ${size}`} >{children}</button>
  )
}
