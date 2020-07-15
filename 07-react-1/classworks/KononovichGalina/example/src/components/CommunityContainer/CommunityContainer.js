import React from 'react';
import logoReact from './logoReact.svg';
import './CommunityContainer.css';
import iconError from './error.svg';


const CommunityContainer = (props) => {
  return (
    props.titleData ? 
    <div className="CommunityContainer">
      <img src={props.titleData.icon_img? props.titleData.icon_img:logoReact}/>
      <div className="headerSubreddit">
        {props.titleData.title}
      </div> 
      <div className="txtSubreddit">
        {props.titleData.display_name_prefixed}
      </div> 
    </div>
    :
    <div class="errorIcon">
      <img src={iconError}/>
      <div className="errMessage">
          {'Sorry, there were no community results'}
        </div> 
    </div>
  )
}
export default CommunityContainer;

