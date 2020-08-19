import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import './home.css';
import SadFace from './face.svg'
 
class Home extends React.Component {

  state = {
    posts: null
  }

  fetchPosts = async (src = 'react') => {
    console.log(src)
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`${src}hot`).then(res => res.json());
    this.setState({ posts: data });
  }

  fetchSubredditPosts = (event) => {
    this.fetchPosts(event.currentTarget.value);
  }

  render() {
    const { reactSubreddit } = this.props;
    const { posts } = this.state;

    if(posts){
      return (
        <section className = "mainContent">
          <div>
          {posts.data.children.map(child => (
            <div className ="contentItem" key={child.data.id}>
              <div className="subredditsLogoWrapper">
                <img className="subredditsLogo" src={child.data.header_img} />
              </div>
              <div className="contentItemInfo"> 
                <h2 onClick={(value) => {this.fetchSubredditPosts(value)}}>{child.data.title}</h2>
                <p>{child.data.selftext}</p>
              </div>
            </div>
          ))}
          </div>
        </section>
      );
    }
    if (!reactSubreddit) {
      return (
        <p>Loading...</p>
      );
    }
   
    if (!reactSubreddit.data || reactSubreddit.data.children.length === 0) {
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
        {reactSubreddit.data.children.map(child => (
          <div className ="contentItem" key={child.data.id}>
            <div className="subredditsLogoWrapper">
              <img className="subredditsLogo" src={child.data.header_img} />
            </div>
            <div className="contentItemInfo"> 
              <h2 onClick={() => {this.fetchPosts(child.data.url)}}>{child.data.title}</h2>
              <p>{child.data.selftext}</p>
            </div>
          </div>
        ))}
        </div>
      </section>
    );
  }
}

export default withRedditApi(Home);
