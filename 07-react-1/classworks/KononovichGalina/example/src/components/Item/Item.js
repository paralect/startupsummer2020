import React from 'react';
import Moment from 'moment';
import './item.css';
import iconComment from './iconComment.svg';

const Item = (props) => {
  console.log(props);
  if(props.item.data.author_fullname) {
    return (
      <div className="item">
     <div className="authorContainer">
       {'Posted by ' + props.item.data.author_fullname}
     </div> 
      <div className="headerItem">
        {props.item.data.title}
      </div>
      <div className="bodyItem">
        {props.item.data.selftext}
      </div>

      <div className="comments">
        <img src={iconComment}/> 
       <div className="countComments">
           {props.item.data.num_comments + ' Comments'}
       </div>
      </div>
     </div>
    )
  }
  else {
    return (
      // <div className="item">
      // <div className="authorContainer">
      //   {'Posted by ' + props.item.data.author_fullname}
      // </div> 
      //  <div className="headerItem">
      //    {props.item.data.title}
      //  </div>
      //  <div className="bodyItem">
      //    {props.item.data.selftext}
      //  </div>
  
      //  <div className="comments">
      //    <img src={iconComment}/> 
      //   <div className="countComments">
      //       {props.item.data.num_comments + ' Comments'}
      //   </div>
      //  </div>
      // </div>
      <div className="item itemSearch">
        <div className="infoAbout">
          <img className="communityIcon" src={props.item.data.header_img}></img>
          <div className="headerCommunity">
            {props.item.data.display_name_prefixed}
          </div>
          <div className="subscribers">
          {props.item.data.subscribers + ' Members'}
          </div>
        </div>
        <div className="description">
          {props.item.data.public_description}
        </div>
      </div>
    )
  }
}
export default Item;
