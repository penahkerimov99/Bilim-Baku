import React from 'react'
import { Button } from '../shared/Button'
import "./style.scss"

export const HomeFirstBackground = () => {
  return (
    <div className='home-first-page'>
      <div className="center">
        <div className="left-button">
          <img src="./assets/left-click.png" alt="left" />
        </div>
        <div className='first-page-context'>
        <span>Xəbərlər</span>
        <h1>Bilim Bakı Laboratoriyalarına qeydiyyat başladı!</h1>
        <Button children='Qeydiyyatdan keç' size='m-size' bg_variant='b-white' bor_variant='border' />
        
        </div>
        <div className="right-button">
        <img src="./assets/right-click.png" alt="left" />
        </div>
      </div>
      <div className="cloud">

      </div>
    </div>
  )
}
