import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import Thread from 'components/Thread';
import SearchBar from 'components/SearchBar';
import SubReddit from 'components/SubReddit/SubReddit';

import './home.css';
import logo from '../../assets/reddit_logo.svg';
import SubHeader from 'components/SubredditTitle/SubHeader';

const addSubRedditInfo = async (fetchReddit, obj) => {
  const { display_name_prefixed: loc } = obj.data;
  const data = await fetchReddit(`/${loc}/about`).then(res => res.json());

  return { ...obj, aboutData: data?.data };
};

class Home extends React.Component {
  state = {
    subreddit: null,
    searchResults: null,
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit('/r/react/hot?count=10')
      .then(res => res.json());
    const aboutData = await fetchReddit('/r/react/about').then(res => res.json());
    console.log(aboutData);
    this.setState({ subreddit: { ...data, aboutData: aboutData.data } });
  }

  onSearchSubmit = async (searchQuery) => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/subreddits/search?q=${searchQuery}&count=10`)
      .then(res => res.json());

    const resultData = await Promise
      .all(data?.data?.children?.map((obj) => addSubRedditInfo(fetchReddit, obj)));
    console.log(resultData);
    this.setState({ subreddit: null, searchResults: resultData });
  }

  render() {
    const { subreddit, searchResults } = this.state;

    return (
      <section>
        <div className="header">
          <div className="header-logo">
            <img src={logo} alt="reddit logo" />
          </div>
          <SearchBar className="search-bar" onSubmit={this.onSearchSubmit} />
        </div>
        <div className="header-bottom" />
        {subreddit && <SubHeader data={subreddit.aboutData} />}
        <main className="main">
          {subreddit && subreddit.data.children.map(child => <Thread key={child.data.id} data={child.data} />)}
          {searchResults?.map((child) => <SubReddit key={child.data.id} data={child.data} />)}
        </main>
      </section>
    );
  }
}

export default withRedditApi(Home);
