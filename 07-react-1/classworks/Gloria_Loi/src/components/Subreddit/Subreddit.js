
import React from 'react';
import "./Subreddit.css";

class Subreddit extends React.Component {
    
    render() {
        return (
            <div className="subreddit">
                <img className="subreddit-img" height="30px" width="30px" src={this.props.body.data.icon_img}></img>
                 <div>{this.props.body.data.display_name_prefixed}</div>
                 <div className="description">{this.props.body.data.public_description}</div>
            </div>
          );
  }}

  export default Subreddit;