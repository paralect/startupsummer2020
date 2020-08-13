import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useRedditApi from '../../hooks/useRedditApi';

import { fetchPostsArticles } from '../../resources/actions/fetchPostArticles.action';

import svg from '../../assets/images/react.svg';

import './Subreddit.css';

const Subreddit = ({ body: { data } }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [fetchReddit] = useRedditApi();
  const { inputString } = useSelector((state) => state);

  return (
    <div
      className="subreddit"
      onClick={() =>
        fetchPostsArticles(inputString, fetchReddit, history)(dispatch)
      }
    >
      <img
        className="subreddit-img"
        src={data.icon_img ? data.icon_img : svg}
      />
      <div className="post-path">{data.display_name_prefixed}</div>
      <div className="description">{data.public_description}</div>
    </div>
  );
};

export default Subreddit;
