import React from 'react'
import { useLocation } from 'react-router-dom';
import { AboutInfo } from '../components/AboutInfo';

export const About = () => {
  const location = useLocation();
  
  return (
    <div style={{paddingTop: "15rem"}}>
      <AboutInfo/>
    </div>
  )
}
