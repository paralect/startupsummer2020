import React, { useState, useEffect } from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import smorc from './kekw.png';
import fuckImg from './fuck.jpg';
import comment from './comment.jpg';
import moment from "moment";
import CommunityPosts from './CommunityPosts';
import { Link } from 'react-router-dom';

function Home(props)  {

  const [reactSubreddit, setReactSubreddit] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { fetchReddit } = props;
      let data;
      if (!props.location) {
        data = await fetchReddit(`/search?q=${props.inputValue}&type=sr,user`)
          .then(res => res.json())
          .catch((err) => { console.log(err) });
      } else {
        data = await fetchReddit(`${props.location.state.url}hot`)
          .then(res => res.json())
          .catch((err) => { console.log(err) });
      }
      setReactSubreddit(data);
    }
    fetchData();
  }, []);

  if (!reactSubreddit) {
    return (
      <p>Loading...</p>
    );
  }

  const notFound = () => {
    return (
      <div className="smorc">
        <img src={smorc} />
        <p>Sorry, there were no community results for “ {props.inputValue} ”</p>
      </div>
    );
  }

  const communityPosts = () => {
    return (
      <CommunityPosts className="community-posts">
        <div className="community-info">
          <img className="community-posts_logo" src={props.location.state.img || fuckImg} />
          <div>
            <h3>{props.location.state.title}</h3>
            <p>{props.location.state.name}</p>
          </div>
        </div>
        <div className="bg-gray">
        <ul>
          {
            reactSubreddit.data.children.map(child => (
              <li key={child.data.id} className="post">
                <p>Posted by {child.data.subreddit_name_prefixed}&#nbsp;
                 {moment.unix(child.data.created).startOf('day').fromNow()} ago</p>
                <p className="post_title">{child.data.title}</p>
                <p>{child.data.selftext}</p>
                <div>
                  <img src={comment}></img>
                  <p>{child.data.num_comments} Comments</p>
                </div>
              </li>
            ))
          }
        </ul>
        </div>
      </CommunityPosts>
    );
  }

  const communityList = () => {
    return (
      <div className="bg-gray">
        <p className="search-results-p">Search results for “ <span className="fw-b">{ props.inputValue }</span> ”</p>
        <p className="community-list_title">Communities and users</p>
        <div className="community-list_content">
          <ul>
          {reactSubreddit.data.children.map(child => (
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
            <div className="chiki-bamboni">
              <img src={child.data.icon_img || fuckImg}></img>
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
      {reactSubreddit.data && Object.keys(reactSubreddit).length !== 0 && reactSubreddit.data.children.length ?
        !props.location ?
          communityList()
          :
          communityPosts()
        :
        notFound()
    }
    </section>
  );
}

export default withRedditApi(Home);
