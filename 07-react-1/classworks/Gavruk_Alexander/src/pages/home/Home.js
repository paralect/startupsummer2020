import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import SearchResults from 'components/SearchResults/SearchResults';
import Subreddit from 'components/Subreddit/Subreddit';

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    communityTitleData: {
      img: '',
      title: 'The React Library',
      communityUrl: '/r/react'
    }
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const url = this.props.searchValue === '' ? `${this.state.communityTitleData.communityUrl}/hot` : `/search?q=${this.props.searchValue}&type=sr,user`;
    const data = await fetchReddit(url).then(res => res.json());
    this.setState({ reactSubreddit: data });
  }

  getPosts = async (url, img, title, communityUrl) => {
    const { fetchReddit } = this.props;
    const communityTitleData = {
      img: img,
      title: title,
      communityUrl: communityUrl
    }
    const data = await fetchReddit(`${url}hot`).then(res => res.json()).catch((err) => console.log(err));
    this.setState({
      reactSubreddit: data,
      communityTitleData: communityTitleData
    });
  }

  render() {
    const { reactSubreddit } = this.state;

    if (!reactSubreddit) {
      return (
        <p>Loading...</p>
      );
    }

    if (this.props.searchValue === '' || !reactSubreddit.data.hasOwnProperty('facets')) {
      return <Subreddit data={reactSubreddit} communityTitleData={this.state.communityTitleData} />;
    } else {
      return <SearchResults data={reactSubreddit} searchValue={this.props.searchValue} getPosts={this.getPosts} />;
    }
  }
}

export default withRedditApi(Home);
