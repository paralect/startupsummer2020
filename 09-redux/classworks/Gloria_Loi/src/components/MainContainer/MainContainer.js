import React from 'react';
import { useSelector } from 'react-redux';

import * as subredditSelector from '../../resources/selectors/subreddit.selector';

import ListItem from '../ListItem';
import Title from '../Title/Title';

import './MainContainer.css';

const MainContainer = () => {
  const reactSubreddit = useSelector(subredditSelector.getSubbredits);

  return (
    <div className="main">
      <Title />
      {reactSubreddit.data.children.map((item) => (
        <ListItem key={item.data.id} body={item} />
      ))}
    </div>
  );
};

export default MainContainer;
