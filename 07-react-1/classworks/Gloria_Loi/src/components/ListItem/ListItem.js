
import React from 'react';

import "./ListItem.css";

class ListItem extends React.Component {

 
    render() {
        return (
            <div className="item">
                <div className="author-name">Posted by {this.props.body.data.author}</div>
                <div className="title">{this.props.body.data.title}</div>
                <div className="content">{this.props.body.data.selftext ? this.props.body.data.selftext : this.props.body.data.url}</div>
            </div>
            
          );
  }}
  
  export default ListItem;