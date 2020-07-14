import React from 'react';
import logoReact from './logoReact.svg';
import './CommunityContainer.css';


const CommunityContainer = (props) => {
  console.log(props);
  return (
    <div className="CommunityContainer">
      <img src={props.titleData.icon_img? props.titleData.icon_img:logoReact}/>
      <div className="headerSubreddit">
        {props.titleData.title}
      </div> 
      <div className="txtSubreddit">
        {props.titleData.display_name_prefixed}
      </div> 
    </div>
  )
}
export default CommunityContainer;

