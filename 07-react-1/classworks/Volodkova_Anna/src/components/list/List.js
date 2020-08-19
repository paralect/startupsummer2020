import React from 'react';
import ListItem from "../listItem";

import './list.css';
import logo from "../listSearchItem/logo.svg";

class List extends React.Component {
  //about.data.header_img
  //about.data.title
  //about.data.display_name_prefixed
  render() {
    console.log('List arrAbout', this.props.arrAbout);
    return (
      <div>
        <div className="about">
          <div className='header_img'>
            <img src={this.props.arrAbout.data.header_img ? this.props.arrAbout.data.header_img : logo}
                 className='icon'/>
          </div>
          <div>
            <div><strong>{this.props.arrAbout.data.title}</strong></div>
            <div className="name-prefixed">{this.props.arrAbout.data.display_name_prefixed}</div>

          </div>
        </div>
        <div className="list-container">
          {this.props.arrData.map(li => {
            return <ListItem li={li} key={li.data.id}/>
          })}
        </div>
      </div>
    );
  }
}

export default List;