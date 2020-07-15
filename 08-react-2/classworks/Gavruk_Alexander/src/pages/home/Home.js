import React, { useState, useEffect } from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import SearchResults from 'components/SearchResults/SearchResults';
import Subreddit from 'components/Subreddit/Subreddit';

function Home(props) {
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [communityTitleData, setCommunityTitleData] = useState({
    img: '',
    title: 'The React Library',
    communityUrl: '/r/react'
  });

  const getPosts = async (url, img, title, communityUrl) => {
    const { fetchReddit } = props;
    const communityTitleData = {
      img: img,
      title: title,
      communityUrl: communityUrl
    }
    const data = await fetchReddit(`${url}hot`).then(res => res.json()).catch((err) => console.log(err));
    setReactSubreddit(data);
    setCommunityTitleData(communityTitleData);
  }

  useEffect(() => {
    async function fetchData() {
      const { fetchReddit } = props;
      const url = (props.searchValue === '') ? `${communityTitleData.communityUrl}/hot` : `/search?q=${props.searchValue}&type=sr,user`;
      const data = await fetchReddit(url).then(res => res.json());
      setReactSubreddit(data);
    }
    fetchData();
  }, []);

  if (!reactSubreddit) {
    return (
      <p>Loading...</p>
    );
  }

  if (props.searchValue === '' || props.checkIsPostsData(reactSubreddit)) {
    return <Subreddit data={reactSubreddit} communityTitleData={communityTitleData} />;
  } else {
    return <SearchResults
              data={reactSubreddit}
              searchValue={props.searchValue}
              getPosts={getPosts}
              changeIsPostsData={props.changeIsPostsData} />;
  }
}

export default withRedditApi(Home);
