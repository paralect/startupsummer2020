import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import List from "../../components/list";
import ListSearch from "../../components/listSearch";

const searchVal = 'react';
let url = 'Ann';

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    reactAbout: null,
    reactSubreddits: null,
    subClicked: false,
  };


  async componentDidMount() {
    const {fetchReddit} = this.props;
    const data = await fetchReddit('/r/react/hot').then(res => res.json());
    this.setState({reactSubreddit: data});
    const about = await fetchReddit('/r/react/about').then(res => res.json());
    console.log('About', about);
    this.setState({reactAbout: about});
    // const subreddits = await fetchReddit('/subreddits/search?q='+ searchVal).then(res => res.json());
    // this.setState({reactSubreddits: subreddits});
    //console.log('Subreddits',subreddits);
  }

  getSubreddits = async (str) => {
    const {fetchReddit} = this.props;
    const data = await fetchReddit('/subreddits/search?q=' + str.toString()).then(res => res.json());
    this.setState({reactSubreddits: data});
    //console.log('reactSubreddits', data);
    //reactSubreddits.data.children[i].data.url
  }

  handleClick = async (event) => {
    // this.setState({subClicked: true})
    // url = this.state.reactSubreddits.data.children[2].data.url;
    console.log('Subreddit was clicked');
    // const {fetchReddit} = this.props;
    // const data = await fetchReddit(url).then(res => res.json());
    // this.setState({reactSubreddit: data});
    // const about = await fetchReddit(url).then(res => res.json());
    // //console.log('About', about);
    // this.setState({reactAbout: about});
  }


  render() {
    const {reactSubreddit, reactAbout, reactSubreddits} = this.state;
    const mstr = this.props.searchValue;
    const isClicked = this.props.isClicked;


    if (isClicked) {
      this.getSubreddits(mstr);
    }

    if (!reactSubreddit || !reactSubreddits || !reactAbout) {
      return (
        <p>Loading...</p>
      );
    }

    //const arrData = reactSubreddit.data.children;
    const arrAbout = reactAbout.data;
    //<List arrData={arrData}/>

    //const arrSubreddits = reactSubreddits.data.children;
    //<ListSearch arrData={arrSubreddits}/>


    // console.log('Str', mstr);
    // console.log('isClicked', isClicked);

    return (mstr && isClicked) ? (
      <ListSearch arrData={this.state.reactSubreddits.data.children} handleClick={this.handleClick}/>) : (
      <List arrData={this.state.reactSubreddit.data.children} arrAbout={arrAbout}/>)
  }
}

export default withRedditApi(Home);
