import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import Header from "../../components/HeaderComponent"
import Block from "../../components/Block";
import SubredditsList from "../../components/SubredditList";
import MainContainer from 'components/MainContainer';

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    subRedditTitle: null,
    inputString: "",
    showSearchList: false
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit('/r/react/hot').then(res => res.json());
    const title = await fetchReddit('/r/react/about').then(res => res.json());
    this.setState({ reactSubreddit: data, subRedditTitle: title });
  }

  inputChanged = (event) => {
    this.setState({ inputString: event.target.value });
  }

   displaySubreddits = async () => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/subreddits/search?q=${this.state.inputString}`).then(res => res.json());
    ///здесь надо проверить на пустую строку
    this.setState({ reactSubreddit: data, showSearchList: true});
  }

  render() {
    const { reactSubreddit, subRedditTitle, showSearchList} = this.state;

    if (!reactSubreddit || !subRedditTitle) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <section>
      <Header input={this.inputChanged} click={this.displaySubreddits}/>
      <Block title = {subRedditTitle}/>
      {showSearchList? <SubredditsList data = {reactSubreddit.data.children}/> : <MainContainer data = {reactSubreddit.data.children}/>}
     
      </section>
    );
  }
  }


export default withRedditApi(Home);
