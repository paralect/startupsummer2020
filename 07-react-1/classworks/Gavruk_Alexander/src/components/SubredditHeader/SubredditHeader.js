import React from 'react';
import './SubredditHeader.css';

class SubredditHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='subreddit-header'>
          <img src={this.props.communityTitleData.img || './no-results.png'} alt={this.props.communityTitleData.communityUrl} />
          <div className='subreddit-header_title'>
              <h1>{this.props.communityTitleData.title}</h1>
              <span>{this.props.communityTitleData.communityUrl}</span>
          </div>
      </div>
    );
  }
}

export default SubredditHeader;
