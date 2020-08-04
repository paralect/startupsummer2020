import React, { useEffect } from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import { useDispatch, useSelector } from 'react-redux';

import { getInputValue } from '../../resources/input/input.selectors';
import { getSubredditData } from '../../resources/subredditData/subredditData.selectors';
import { getSubredditInfo } from './getSubredditInfo';

import NotFound from './NotFound';
import CommunityPosts from './CommunityPosts';
import CommunityList from './CommunityList';


function Home(props)  {
  const dispatch = useDispatch();

  const inputValue = useSelector(getInputValue);
  const subredditData = useSelector(getSubredditData);

  console.log(inputValue);

  useEffect(() => {
    async function fetchData() {
      const { fetchReddit } = props;
      const url = props.match.params.subredditUrl ? `${props.match.params.subredditUrl}/hot` : `/search?q=${inputValue}&type=sr,user`;
      dispatch(getSubredditInfo(fetchReddit, url));
    }
    fetchData();
  }, [inputValue]);

  if (!subredditData) {
    return (
      <p>Loading...</p>
    );
  }

  if (!subredditData.data || !subredditData.data.children.length) {
    return (
      <NotFound />
    );
  }

  return (
    <section className="community-list">
      {!props.match.params.subredditUrl
        ? <CommunityList />
        : <CommunityPosts
            {...props}
          />}
    </section>
  );
}

export default withRedditApi(Home);
