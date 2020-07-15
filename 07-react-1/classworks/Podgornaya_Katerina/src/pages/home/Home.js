import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import './home_style.css';
import num_comments from './post_num_comments.svg';
import no_subreddit_icon from './no_subreddit_icon.png';
import moment from 'moment';
import App from 'App';
import cry from './cry.svg';

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    reactSubredditAbout: null,
    reactSearchData: null,
    reactClickSubreddit: false,
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;

    const data = await fetchReddit('/r/gaming/hot').then(res => res.json());
    const dataAbout = await fetchReddit('/r/gaming/about').then(res => res.json());
    const searchData = await fetchReddit(`/subreddits/search?q=${this.props.phrase}`).then(res => res.json());

    this.setState({ reactSubreddit: data, reactSubredditAbout: dataAbout, reactSearchData: searchData });

    console.log(data);
    console.log(dataAbout);
    console.log(searchData);
  }

  onSearchItemClick = async (name) => {
    console.log('try click');
    const { fetchReddit } = this.props;

    const data = await fetchReddit(`/r/${name}/hot`).then(res => res.json());
    const dataAbout = await fetchReddit(`/r/${name}/about`).then(res => res.json());
    this.setState({ reactSubreddit: data, reactSubredditAbout: dataAbout, reactClickSubreddit: true });
    console.log('data here, state set');
  };

  render() {
    console.log('Try render.');
    const { reactSubreddit, reactSubredditAbout, reactSearchData, reactClickSubreddit } = this.state;

    if (!reactSubreddit && !reactSubredditAbout) {
      console.log('Loading.');
      return (
        <p className='loading'>Loading...</p>
      );
    }
    console.log('Loaded.');

    if (this.props.phrase) {
      if (reactSearchData.data.dist === 0) {
        console.log('Searching.');
        return (
          <section className='no_results'>
            <img src={cry} />
            <div>
              Sorry, there were no community results for "<b>{this.props.phrase}</b>"
              </div>
          </section>
        )
      }
      console.log('It is not searching.');

      if (!reactClickSubreddit) {
        return (
          <section className='section'>
            <header className='header_search'>
              Search results for "<b>{this.props.phrase}</b>"
          </header>
            <h1 className='search_title'>Communities and users</h1>
            <content className='search_content'>
              {reactSearchData.data.children.map(child => (
                <div key={child.data.id} className='search_item_field' onClick={() => this.onSearchItemClick(child.data.display_name)}>
                  <div className='search_community_logo'>
                    <img src={child.data.icon_img || no_subreddit_icon || child.data.community_icon} className='search_subreddit_icon' />
                    <div className='search_title_subreddit'>
                      <h1 className='search_title_subreddit_name'>{child.data.display_name_prefixed}</h1>
                      <h5 className='search_title_subreddit_subscribers'>{child.data.subscribers} Members</h5>
                    </div>
                  </div>
                  <div className='search_community_description'>{child.data.public_description}</div>
                </div>
              ))}
            </content>
          </section>
        );
      }
      console.log('Button search not pressed.');
    }

        return (
          <section className='section'>
            <header className='header_home'>
              <img src={reactSubredditAbout.data.icon_img || no_subreddit_icon || reactSubredditAbout.data.community_icon} className='subreddit_icon'></img>
              <div className='title_subreddit'>
                <h1 className='title_subreddit_name'>{reactSubredditAbout.data.title}</h1>
                <h5 className='title_subreddit_subname'>{reactSubredditAbout.data.display_name_prefixed}</h5>
              </div>
            </header>
            <content className='subreddit_content'>
              {reactSubreddit.data.children.map(child => (
                <div key={child.data.id} className='post_field'>
                  <div className='post_author'>Posted by {child.data.author} {moment.unix(child.data.created).fromNow()}</div>
                  <h2 className='post_title'>{child.data.title}</h2>
                  <p className='post_selftext'>{child.data.selftext || child.data.url}</p>
                  <div className='post_num_comments'>
                    <img src={num_comments}></img>
                    {child.data.num_comments} comments
            </div>
                </div>
              ))}
            </content>
          </section>
        );
    }
  }

export default withRedditApi(Home);
