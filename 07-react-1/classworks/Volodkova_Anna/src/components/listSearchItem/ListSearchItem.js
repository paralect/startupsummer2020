import React from 'react';
import './listSearchItem.css'

import logo from './logo.svg';

//[i].data.community_icon
//[i].data.display_name_prefixed:
//subscribers
//public_description


class ListSearchItem extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='community-icon'>
          <img src={this.props.li.data.header_img ? this.props.li.data.header_img : logo} className='img'/>
        </div>
        <div className='name-followers'>
          <div className="name">{this.props.li.data.display_name_prefixed}</div>
          <div className='followers'>{this.props.li.data.subscribers} members</div>
        </div>
        <div className="explaining">{this.props.li.data.public_description}</div>
      </div>
    );

  }

}

export default ListSearchItem;