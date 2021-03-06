import React from 'react';
import { Link } from 'react-router-dom';

import './listSearchItem.css'
import logo from './logo.svg';

function ListSearchItem (props) {
    return (
      <Link
        to={`/subreddit/${props.li.data.display_name}`}
      >
        <div>
          <div className='container'>
            <div className='community-icon'>
              <img
                src={props.li.data.header_img ? props.li.data.header_img : logo}
                className='img'
              />
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
