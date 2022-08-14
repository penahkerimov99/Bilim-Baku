import React from "react";
import {Jobcard} from '../Jobcard'
import './style.scss'





export const Section1 = ({data})=>{
    return <div className="section1">
     {data.map((x)=>{
     return(
        <Jobcard 
        key={x.id}
        logo = {x.logo}
        description = {x.description}
        about = {x.about}
        bgImg = {x.background}
        linkone = {x.showAll}
        Color = {x.linkColor}
        />
     )

     })}
    </div>
}