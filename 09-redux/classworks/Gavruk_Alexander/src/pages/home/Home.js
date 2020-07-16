import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRedditApi } from 'hooks/useRedditApi';
import SearchResults from 'components/SearchResults/SearchResults';
import Subreddit from 'components/Subreddit/Subreddit';

import * as subredditActions from 'resources/subreddit/subreddit.actions';
import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';


function Home(props) {
  const dispatch = useDispatch();

  const isPostsData = useSelector(subredditSelectors.getIsPostsData);
  const searchValue = useSelector(subredditSelectors.getSearchValue);
  const communityTitleData = useSelector(subredditSelectors.getCommunityTitleData);
  const subredditData = useSelector(subredditSelectors.getSubredditData);

  async function fetchData() {
    const { fetchReddit } = props;
    const url = (searchValue === '' || isPostsData) ? `/${communityTitleData.communityUrl}/hot` : `/search?q=${searchValue}&type=sr,user`;
    const data = await fetchReddit(url).then(res => res.json());
    dispatch(subredditActions.fetchData(data));
  } 

  useEffect(() => {
    fetchData();
  }, []);
  
  if (!subredditData) {
    return (
      <p>Loading...</p>
    );
  }

  if (searchValue === '' || isPostsData) {
    return <Subreddit />;
  } else {
    return <SearchResults />;
  }
}

export default withRedditApi(Home);
