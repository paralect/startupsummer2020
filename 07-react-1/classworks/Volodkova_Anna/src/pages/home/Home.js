import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import List from "../../components/list";
import ListSearch from "../../components/listSearch";

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    reactAbout: null,
    reactSubreddits: null,

  }

  async componentDidMount() {
    const {fetchReddit} = this.props;
    const data = await fetchReddit('/r/react/hot').then(res => res.json());
    this.setState({reactSubreddit: data});
    const about = await fetchReddit('/r/react/about').then(res => res.json());
    this.setState({reactAbout: about});
    const subreddits = await fetchReddit('/subreddits/search?q=react').then(res => res.json());
    this.setState({reactSubreddits: subreddits});
    console.log('Subreddits',subreddits);
  }

  // getAbout = async () => {
  //   const {fetchReddit} = this.props;
  //   const data = await fetchReddit('/r/react/about').then(res => res.json());
  //   this.setState({reactAbout: data});
  //   //console.log(data);
  // }
  //
  getSubreddits = async (str) => {
    const {fetchReddit} = this.props;
    const data = await fetchReddit('/subreddits/search?q=' + str.toString()).then(res => res.json());
    this.setState({reactSubreddits: data});
    console.log(data);
  }


  render() {
    const {reactSubreddit, reactAbout, reactSubreddits } = this.state;

    if (!reactSubreddit || !reactSubreddits) {
      return (
        <p>Loading...</p>
      );
    }

    const arrData = reactSubreddit.data.children;
    //<List arrData={arrData}/>

    const arrSubreddits = reactSubreddits.data.children;
    //<ListSearch arrData={arrSubreddits}/>

    const mstr = this.props.searchValue;
    const isClicked = this.props.isClicked;
    console.log(mstr);
    console.log(isClicked);

    if(isClicked){
      this.getSubreddits(mstr);
    }

    return mstr ? <ListSearch arrData={arrSubreddits}/> : <ListSearch arrData={arrData}/>
  }
}

export default withRedditApi(Home);
