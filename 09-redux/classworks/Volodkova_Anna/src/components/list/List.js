import React from 'react';
import ListItem from '../listItem';

import './list.css';
import logo from '../listSearchItem/logo.svg';

function List (props) {
    return (
      <div>
        <div className="about">
          <div className='header_img'>
            <img
              src={props.arrAbout.data.header_img ? props.arrAbout.data.header_img : logo}
              className='icon'
            />
          </div>
          <div>
            <h3>{props.arrAbout.data.title}</h3>
            <div className="name-prefixed">{props.arrAbout.data.display_name_prefixed}</div>
          </div>
        </div>
        <div className="list-container">
          {props.arrData.map(li => {
            return <ListItem li={li} key={li.data.id}/>
          })}
        </div>
      </div>
    );
}

export default List;
