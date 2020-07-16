import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRedditApi } from 'hooks/useRedditApi';
import SearchResults from 'components/SearchResults/SearchResults';
import Subreddit from 'components/Subreddit/Subreddit';

import * as subredditActions from 'resources/subreddit/subreddit.actions';
import * as subredditSelectors from 'resources/subreddit/subreddit.selectors';


function Home(props) {
  const dispatch = useDispatch();

  const getPosts = async (img, title, communityUrl) => {
    const data = {
      img: img,
      title: title,
      communityUrl: communityUrl
    }
    props.updateCommunityTitleData(data);
  }

  async function fetchData() {
    const { fetchReddit } = props;
    const url = (props.searchValue === '' || props.isPostsData) ? `/${props.communityTitleData.communityUrl}/hot` : `/search?q=${props.searchValue}&type=sr,user`;
    const data = await fetchReddit(url).then(res => res.json());
    dispatch(subredditActions.fetchData(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!reactSubreddit) {
    return (
      <p>Loading...</p>
    );
  }

  if (props.searchValue === '' || isPostsData) {
    return <Subreddit />;
  } else {
    return <SearchResults
              searchValue={props.searchValue}
            />;
  }
}

export default withRedditApi(Home);
