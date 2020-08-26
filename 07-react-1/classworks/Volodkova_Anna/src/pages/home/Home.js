import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import List from "../../components/list";
import ListSearch from "../../components/listSearch";

class Home extends React.Component {
  // handleClick = async (event) => {
  //   // this.setState({subClicked: true})
  //   // url = this.state.reactSubreddits.data.children[2].data.url;
  //   console.log('Subreddit was clicked');
  //   // const {fetchReddit} = this.props;
  //   // const data = await fetchReddit(url).then(res => res.json());
  //   // this.setState({reactSubreddit: data});
  //   // const about = await fetchReddit(url).then(res => res.json());
  //   // //console.log('About', about);
  //   // this.setState({reactAbout: about});
  // }

  render() {
    console.log('Home props', this.props);
    //const arrData = reactSubreddit.data.children;
    //const arrAbout = reactAbout.data;
    //<List arrData={arrData}/>
    //const arrSubreddits = reactSubreddits.data.children;
    //<ListSearch arrData={arrSubreddits}/>

    if (!this.props.reactSubreddit || !this.props.reactAbout) {
      return (
        <p>Loading...</p>
      );
    }

    return this.props.reactSubreddits  ?
      <ListSearch arrData={this.props.reactSubreddits.data.children} handle={this.props.handle}/> :
      <List arrData={this.props.reactSubreddit.data.children} arrAbout={this.props.reactAbout} />
  }
}

export default withRedditApi(Home);
