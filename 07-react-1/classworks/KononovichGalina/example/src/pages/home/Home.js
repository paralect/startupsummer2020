import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
// import InputSearch from 'components/inputSearch';
import Header from 'components/Header';
import CommunityContainer from 'components/CommunityContainer';
import List from 'components/List';
import Item from 'components/Item';
import ResultSearch from 'components/resultSearch';



class Home extends React.Component {
  state = {
    reactSubreddit: null,
    title: null,
    subreddit: null,
    inputValue: '',
    showPosts: true

  }

  getRedditData = async (subreddit = 'react') => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/r/${subreddit}/hot`).then(res => res.json());
    const titleData = await fetchReddit(`/r/${subreddit}/about`).then(res => res.json());
    const subredditData = await fetchReddit(`/subreddits/search?q=${subreddit}`).then(res => res.json());
    this.setState({ reactSubreddit: data , title: titleData, subreddit:subredditData});
  }

  subredditClickHandler = async () => {
    await this.getRedditData();
    this.setState({showPosts: true})
  }

  componentDidMount() {
    this.getRedditData();
  }

  onSearchChange = (inputValue) => {
    this.setState({
      inputValue,
      showPosts: !inputValue.length
    });
    this.getRedditData(inputValue);
  }

  render() {
    const {reactSubreddit, title, subreddit, inputValue} = this.state;
    if (!reactSubreddit || !title || !subreddit) {
      return (
        <p>Loading...</p>
      );
    }

    const dataArr = reactSubreddit.data && reactSubreddit.data.children;
    const titleArr = title.data;

    return (
      <section>
       {/* <InputSearch/> */}
       <Header onSearchChange={this.onSearchChange}/>
       <CommunityContainer data={dataArr} titleData = {titleArr}/>
       {!reactSubreddit.data 
        ? <p>No</p> 
        : (<List 
            data={dataArr}
            searchEl={subreddit.data.children} 
            inputValue={inputValue} 
            clickHandler={this.subredditClickHandler}
          />)}
       {/* <ResultSearch subredditData={subredditArr}/> */}
       
       
      </section>
    );
  }
}

export default withRedditApi(Home);
