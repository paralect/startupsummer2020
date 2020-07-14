import React from "react";
import './InfoBar.css'
import placeholder from "../../assets/unnamed.png";

const InfoBar = ({text, subtext, imageUrl, inSearch=true}) => {
  return(
  <div className={'InfoBar'}>
    {inSearch&&<img className={'img'} src={imageUrl  || placeholder}/>}
    <h2 className={'styled-text'}>{text}</h2>
    <p className={'subtext'}>{subtext}</p>
  </div>
  )
}
export {InfoBar}