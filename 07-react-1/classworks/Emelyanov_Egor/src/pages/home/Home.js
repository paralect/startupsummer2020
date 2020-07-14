import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import smorc from './kekw.png';
import fuckImg from './fuck.jpg';
import comment from './comment.jpg';
import moment from "moment";

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    communityInfo: {
      img: fuckImg,
      title: '',
      name: '',
    },
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/search?q=${this.props.inputValue}&type=sr,user`)
      .then(res => res.json())
      .catch((err) => { console.log(err) });
    this.setState({ reactSubreddit: data });
  }

  async getCommunityPosts(url, img, title, communityName) {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`${url}hot`)
      .then(res => res.json())
      .catch((err) => { console.log(err) });
    this.setState({ reactSubreddit: data, communityInfo: { img: img || fuckImg, title, name: communityName }  });
  }



  render() {
    const { reactSubreddit } = this.state;

    if (!reactSubreddit) {
      return (
        <p>Loading...</p>
      );
    }

    const notFound = () => {
      return (
        <div className="smorc">
          <img src={smorc} />
          <p>Sorry, there were no community results for “ {this.props.inputValue} ”</p>
        </div>
      );
    }

    const communityPosts = () => {
      return (
        <div className="community-posts">
          <div className="community-info">
            <img className="community-posts_logo" src={this.state.communityInfo.img} />
            <div>
              <h3>{this.state.communityInfo.title}</h3>
              <p>{this.state.communityInfo.name}</p>
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
        </div>
      );
    }

    const communityList = () => {
      return (
        <div className="bg-gray">
          <p className="search-results-p">Search results for “ <span className="fw-b">{ this.props.inputValue }</span> ”</p>
          <p className="community-list_title">Communities and users</p>
          <div className="community-list_content">
            <ul>
            {reactSubreddit.data.children.map(child => (
              <li
                key={child.data.id}
                onClick={() => this.getCommunityPosts(
                  child.data.url,
                  child.data.icon_img,
                  child.data.title,
                  child.data.display_name_prefixed
                )}
              >
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
          !reactSubreddit.data.children[0].data.author ?
            communityList()
            :
            communityPosts()
          :
          notFound()
      }
      </section>
    );
  }
}

export default withRedditApi(Home);
