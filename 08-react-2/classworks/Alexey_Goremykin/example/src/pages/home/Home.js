import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import './home.css';
import SadFace from './face.svg';
import Redirect from 'react-router-dom/es/Redirect';
 
function Home(props) {

  const openPosts = (event) => {
    props.fetchPosts(event);
  }

  if(props.posts){
    return (
      <section className = "mainContent">
        <div>
          {props.posts.data.children.map(child => (
          <div className ="contentItem" key={child.data.id}>
            <div className="subredditsLogoWrapper">
              <img className="subredditsLogo" src={child.data.header_img} />
          </div>
          <div className="contentItemInfo"> 
            <h2>{child.data.title}</h2>
            <p>{child.data.selftext}</p>
          </div>
        </div>
      ))}
        </div>
      </section>
    );
  }
  if (!props.reactSubreddit) {
    return (
      <p>Loading...</p>
    );
  }

  if (!props.reactSubreddit.data || props.reactSubreddit.data.children.length === 0) {
    return (
      <div className="notFound">
        <img src={SadFace}/>
        <p>Sorry, there were no community for link</p>
      </div>
    );
  }

  return (
    <Redirect to={'/search'}></Redirect>
  );
}

export default withRedditApi(Home);
