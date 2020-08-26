import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import './searchresults.css';
import SadFace from './face.svg';
import Redirect from 'react-router-dom/es/Redirect';
 
function SearchResults(props) {

  const openPosts = (event) => {
    props.fetchPosts(event);
  }

  if(props.posts){
    return (
      <Redirect to={'/'}></Redirect>
    )
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

    <section className = "mainContent">
      <div>
      {props.reactSubreddit.data.children.map(child => (
        <div className ="contentItem" key={child.data.id}>
          <div className="subredditsLogoWrapper">
            <img className="subredditsLogo" src={child.data.header_img} />
          </div>
          <div className="contentItemInfo"> 
            <h2 className="contentItemInfoTitle" onClick={() => {openPosts(child.data.url)}}>{child.data.title}</h2>
            <p>{child.data.selftext}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default withRedditApi(SearchResults);
