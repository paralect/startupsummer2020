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
    inputValue: ''
  }

  showClick = (event) => {
    console.log(event.target.value);
    this.setState({inputValue:event.target.value});
    console.log(this.state.inputValue);
  }  


  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit('/r/react/hot').then(res => res.json());
    const titleData = await fetchReddit('/r/react/about').then(res => res.json());
    const subredditData = await fetchReddit('/subreddits/search?q=react').then(res => res.json());
    console.log(titleData);
    this.setState({ reactSubreddit: data , title: titleData, subreddit:subredditData});
  }

  render() {
    const { reactSubreddit, title, subreddit} = this.state;

    if (!reactSubreddit || !title || !subreddit) {
      return (
        <p>Loading...</p>
      );
    }

    // if()

    const dataArr = reactSubreddit.data.children;
    const titleArr = title.data;
    const subredditArr = subreddit.data.children;
    console.log(subredditArr);
  
    return (
      <section>
       {/* <InputSearch/> */}
       <Header show={this.showClick}/>
       <CommunityContainer data={dataArr} titleData = {titleArr}/>
       <List data={dataArr}/>
       {/* <ResultSearch subredditData={subredditArr}/> */}
       
       
      </section>
    );
  }
}

export default withRedditApi(Home);
