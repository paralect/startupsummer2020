import React from 'react';
import { useSelector } from 'react-redux';
import * as subredditSelector from '../../resources/selectors/subreddit.selector';

import Subreddit from '../Subreddit';

import './SubrediitList.css';

const SubredditList = () => {
  const reactSubreddit = useSelector(subredditSelector.getSubbredits);

  return (
    <div className="subreddits-container">
      {reactSubreddit.data.children.map((item) => (
        <Subreddit key={item.data.id} body={item} />
      ))}
    </div>
  );
};

export default SubredditList;
