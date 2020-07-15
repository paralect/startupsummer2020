import React, { useState, useEffect } from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import SearchResults from 'components/SearchResults/SearchResults';
import Subreddit from 'components/Subreddit/Subreddit';

function Home(props) {
  const [reactSubreddit, setReactSubreddit] = useState(null);

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
    setReactSubreddit(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!reactSubreddit) {
    return (
      <p>Loading...</p>
    );
  }

  if (props.searchValue === '' || props.isPostsData) {
    return <Subreddit data={reactSubreddit} communityTitleData={props.communityTitleData} />;
  } else {
    return <SearchResults
              data={reactSubreddit}
              searchValue={props.searchValue}
              getPosts={getPosts}
              updateIsPostsData={props.updateIsPostsData}
            />;
  }
}

export default withRedditApi(Home);
