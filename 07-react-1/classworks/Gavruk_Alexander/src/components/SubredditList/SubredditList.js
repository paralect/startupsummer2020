import React from 'react';
import './SubredditList.css';
import moment from 'moment';

class SubredditList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='subreddit-list'>
        {this.props.data.data.children.map(child => (
          <div key={child.data.id} className='subreddit-list-item'>
            <span className='subreddit-list-item_posted'>Posted by u/{child.data.author} {moment.unix(child.data.created).startOf('day').fromNow()}</span>
            <h2>{child.data.title}</h2>
            <p>{child.data.selftext}</p>
            <div className="subreddit-list-item_comment">
              <img src='./comment.jpg' alt="comment" />
              <span>{child.data.num_comments} Comments</span>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default SubredditList;
