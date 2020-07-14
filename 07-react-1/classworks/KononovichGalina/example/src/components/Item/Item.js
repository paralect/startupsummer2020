import React from 'react';
import Moment from 'moment';
import './item.css';
import iconComment from './iconComment.svg';

const Item = (props) => {
  // console.log(props.item);
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
export default Item;
