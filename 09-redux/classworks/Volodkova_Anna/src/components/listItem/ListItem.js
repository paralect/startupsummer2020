import React from 'react';

import './listItem.css'
import moment from 'moment';
import commentsIcon from './comments.svg';

function ListItem (props) {
    return (
      <div className="card">
        <div className="whoWhen">
          Posted by {props.li.data.author} {moment.unix(props.li.data.created_utc).startOf('day').fromNow()}
        </div>
        <div className="title">{props.li.data.title}</div>
        <div className="text">{props.li.data.selftext}</div>
        <div className="comments">
          <img
            src={commentsIcon}
            className="comments-icon"
          />
          {props.li.data.num_comments} Comments
        </div>
      </div>
    );
}

export default ListItem;
