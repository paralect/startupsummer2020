import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import Header from '../../components/Header/Header';
import Subreddit from '../../components/Subreddit/Subreddit';
import SearchResult from '../../components/SearchResult/SearchResult';
import NotFound from '../../components/NoResults/NotFound';

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    searchResults: null,
    areSearchResults: true,
    img: null,
    display_name: null,
    searchReq: null,
  };

  sendSearchRequest = async (value) => {
    const {fetchReddit} = this.props;
    const data = await fetchReddit(`/subreddits/search?q=${value}`).then(res => res.json());
    this.setState({searchResults: data});
    this.setState({areSearchResults: false});
    this.setState({searchReq: value});
  };

  selectSubreddit = async (value, img) => {
    const {fetchReddit} = this.props;
    const data = await fetchReddit(`/r/${value}/hot`).then(res => res.json());
    this.setState({reactSubreddit: data});
    this.setState({areSearchResults: true});
    this.setState({img: img});
    this.setState({display_name: value});
  };

  async componentDidMount() {
    const {fetchReddit} = this.props;
    const data = await fetchReddit('/r/react/hot').then(res => res.json());
    this.setState({reactSubreddit: data});
  }

  render() {
    const {reactSubreddit, searchResults} = this.state;

    if (!reactSubreddit) {
      return (
          <p>Loading...</p>
      );
    }
    if(searchResults && searchResults.data.dist === 0){
      return(
              <>
                <Header
                    sendSearchRequest={this.sendSearchRequest}
                    img ={this.state.img}
                    display_name={this.state.display_name || this.state.reactSubreddit.display_name}
                />
                <NotFound searchReq={this.state.searchReq}/>
              </>
          )
    }


    return (
        <>
          <Header
              sendSearchRequest={this.sendSearchRequest}
              img ={this.state.img}
              display_name={this.state.display_name || this.state.reactSubreddit.display_name}
          />
          {this.state.areSearchResults ?
              <section>
                {reactSubreddit.data.children.map(child => (
                    <Subreddit
                        key={child.data.id}
                        author={child.data.author}
                        title={child.data.title}
                        selftext={child.data.selftext}
                        time={child.data.created}
                    />
                ))}
              </section>
              :
              <section>
                {this.state.searchResults.data.children.map(child => (
                    <SearchResult
                        key={child.data.id}
                        display_name={child.data.display_name}
                        description={child.data.public_description}
                        img={child.data.header_img}
                        subscribers={child.data.subscribers}
                        selectSubreddit = {this.selectSubreddit}
                    />
                ))}
              </section>
          }
        </>
    );
  }
}

export default withRedditApi(Home);
