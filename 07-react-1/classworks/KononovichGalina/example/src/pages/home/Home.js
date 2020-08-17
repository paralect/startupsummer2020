import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import Header from 'components/Header';
import Community from 'components/Community';
import List from 'components/List';
import Item from 'components/Item';


class Home extends React.Component {
  state = {
    renderData: null,
    title: null,
    inputValue: '',
    name_prefixed: null,
    community_icon: null,
    fetchReddit: null,
  }

  getRedditData = async (subreddit = '/r/react') => {
    console.log(subreddit);
    const { fetchReddit } = this.props;
    const dataPosts = await fetchReddit(`${subreddit}/hot?limit=10`).then(res => res.json());
    const fetchTitle = await fetchReddit(`${subreddit}/about`).then(res => res.json());
    this.setState({ renderData: dataPosts.data.children, title: fetchTitle.data.title, name_prefixed:fetchTitle.data.display_name_prefixed, community_icon: fetchTitle.data.icon_img, fetchReddit: fetchReddit});
  }

  setInputValue = (inputValue) => {
    this.setState({ inputValue: inputValue });
  }

  componentDidMount() {
    this.getRedditData();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      this.getDataSubreddits(this.state.inputValue);
    }
  }

  getDataSubreddits = async (subreddit) => {
    const { fetchReddit } = this.props;
    const dataSubreddits = await fetchReddit(`/subreddits/search?q=${subreddit}/limit=10`).then(res => res.json());
    this.setState({ renderData: dataSubreddits.data.children });
  }

  render() {
    const {renderData, inputValue, title, name_prefixed, community_icon, fetchReddit } = this.state;
    if (!renderData) {
      return (
        <p>Loading...</p>
      );
    }
    else {
      return (
        <section>
          <Header setInputValue={this.setInputValue} />
          <Community inputValue={inputValue} title={title} name_prefixed={name_prefixed} community_icon={community_icon}/>
          <List renderData={renderData} inputValue={inputValue} getRedditData={this.getRedditData} fetchReddit={fetchReddit}/>
        </section>
      );
    }
  }
}

export default withRedditApi(Home);
