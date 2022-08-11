import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'


const NavButtons = () => {
  return (
    <div className='nav-items'>
    
    <ul>
    <li><Link className='link2' to="/home">Ana səhifə</Link></li>
    <li><Link className='link' to="/about">Haqqımızda</Link></li>
    <li><Link className='link' to="/labs">Laboratoriyalar</Link></li>
    <li><Link className='link' to="/centers">Mərkəzlər</Link></li>
    <li><Link className='link' to="/news">Xəbərlər</Link></li>
    <li><Link className='link' to="/contact">Günlük əlaqə</Link></li>
    </ul>

    </div>
  )
}

export default NavButtons