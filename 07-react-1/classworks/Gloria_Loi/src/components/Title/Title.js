
import React from 'react';
import "./Title.css";

class Title extends React.Component {
 

    render() {
        return (
            <div className="title-logo">
                <img height="50px" width="50px" src={this.props.title.data.icon_img} className="logo-img"/>
                <div>
                    <div className="main-title">{this.props.title.data.title}</div>
                    <div>{this.props.title.data.display_name_prefixed}</div>
                </div>
            </div>
          );
  }}


  export default Title;