import React, { useEffect } from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import lukashenkoImg from './lukasenko.jpg';
import CommunityPosts from './CommunityPosts';
import { getInputValue, getSubredditData } from '../../entity.selectors';
import { getSubredditInfo } from './getSubredditInfo';

import NotFound from './NotFound';
import CommunityPosts from './CommunityPosts';
import CommunityList from './CommunityList';


function Home(props)  {
  const dispatch = useDispatch();

  const inputValue = useSelector(getInputValue);
  const subredditData = useSelector(getSubredditData);

  useEffect(() => {
    async function fetchData() {
      const { fetchReddit } = props;
      const url = props.location ? `${props.location.state.url}hot` : `/search?q=${inputValue}&type=sr,user`;
      dispatch(getSubredditInfo(fetchReddit, url));
    }
    fetchData();
  }, [inputValue, subredditData]);

  if (!subredditData) {
    return (
      <p>Loading...</p>
    );
  }

  const communityList = () => {
    return (
      <div className="bg-gray">
        <p className="search-results-p">
          Search results for “
          <span className="fw-b">{ inputValue }</span>
          ”
        </p>
        <p className="community-list_title">Communities and users</p>
        <div className="community-list_content">
          <ul>
          {subredditData.data.children.map(child => (
            <li key={child.data.id} >
              <Link to={{
                pathname: `/subreddit/${child.data.id}`,
                state: {
                  url: child.data.url,
                  img: child.data.icon_img,
                  title: child.data.title,
                  name: child.data.display_name_prefixed
                }
              }}>
            <div className="community-info">
              <img src={child.data.icon_img || lukashenkoImg}></img>
              <div>
                <p className="community-name">{child.data.display_name_prefixed}</p>
                <p className="community-members">
                  {(child.data.subscribers / 1000).toFixed(1)}k Members
                  </p>
              </div>
            </div>
            <p className="community-description">{child.data.public_description}</p>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section className="community-list">
      {!subredditData.data && <NotFound />}
      {subredditData.data &&
        !props.location
          ?
          <CommunityList />
          :
          <CommunityPosts
            location={props.location}
          />
      }
    </section>
  );
}

export default withRedditApi(Home);
