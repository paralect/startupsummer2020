import React from 'react';
import SubredditHeader from 'components/SubredditHeader/SubredditHeader';
import SubredditList from 'components/SubredditList/SubredditList';
import './Subreddit.css';

class Subreddit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='subreddit'>
        <SubredditHeader communityTitleData={this.props.communityTitleData} />
        <SubredditList data={this.props.data} />
      </div>
    );
  }
}

export default Subreddit;
