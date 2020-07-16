import React from 'react';
import './listSearchItem.css'

import logo from './logo.svg';
import { Link } from "react-router-dom";

//[i].data.header_img
//[i].data.display_name_prefixed:
//subscribers
//public_description


function ListSearchItem (props) {
    return (
      <Link
      to={`/subreddit/${props.li.data.display_name}`}
      >
      <div>
        <div className='container'>
          <div className='community-icon'>
            <img src={props.li.data.header_img ? props.li.data.header_img : logo} className='img'/>
          </div>
          <div className='name-followers'>
            <div className="name">{props.li.data.display_name_prefixed}</div>
            <div className='followers'>{props.li.data.subscribers} members</div>
          </div>
          <div className="explaining">{props.li.data.public_description}</div>
        </div>
      </div>
     </Link>
    );
}

export default ListSearchItem;