import React from 'react';
import './comments.css';

const Comments = (props) => {
  const {item} = props;
    return (
      <div className="comment">

      <div className="author">
        {'Posted by ' + item.author}
      </div> 

      <div className="txtComment">
        {item.body}
      </div>

    </div>
    )
}

export default Comments;