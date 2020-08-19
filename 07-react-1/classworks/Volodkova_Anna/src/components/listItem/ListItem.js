import React from 'react';

import './listItem.css'
import moment from 'moment';
import commentsIcon from './comments.svg';

class ListItem extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="whoWhen"> Posted by {this.props.li.data.author} {moment.unix(this.props.li.data.created_utc).startOf('day').fromNow()} </div>
        <div className="title">{this.props.li.data.title}</div>
        <div className="text">{this.props.li.data.selftext}</div>
        <div className="comments">
          <img src={commentsIcon} className="comments-icon"/>
          {this.props.li.data.num_comments} Comments</div>
      </div>
    );

  }

}

export default ListItem;