import React from "react";
import {Jobcard} from '../Jobcard'
import './style.scss'
import data from '../../data/data.json'

export const Section1 = ()=>{
    return <div className="section1">
{data.map((element)=>{
 return <Jobcard
 id = {element.id}
 logo = {element.logo}
 title = {element.description}
 about = {element.about}
 />
})}
     
    </div>
}