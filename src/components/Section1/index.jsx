import React from "react";
import {Jobcard} from '../Jobcard'
import './style.scss'





export const Section1 = ({data})=>{
    return <div className="section1">
     {data.map((x)=>{
     return(
        <Jobcard 
        logo = {x.logo}
        description = {x.description}
        about = {x.about}
        />
     )

     })}
    </div>
}