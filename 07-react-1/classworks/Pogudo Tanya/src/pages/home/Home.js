import React from "react";
import { withRedditApi } from "hooks/useRedditApi";
import { Subreddit } from "./Subreddit";
import Main from "./Main.js";
import Communities from "./Communities.js";
import HeaderCenter from "./HeaderCenter";
import Header from "./Header";
import HeaderNotNull from "./HeaderNotNull";
import HeaderSearchRes from "./HeaderSearchRes";

class Home extends React.Component {
  state = {
    pageContent: null,
    showSearchResults: false,
    dataAbout: null,
    showHeader: false
  };

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit("/r/react/hot").then((res) => res.json());
    this.setState({ pageContent: data });
  }

  buttonClick = async (value) => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(
      `/subreddits/search?q=${value}`
    ).then((res) => res.json());
    this.setState({ pageContent: data, showSearchResults: true, showHeader:false  });
  };

  buttonClickHeader = async (valueHeader) => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/r/${valueHeader}/hot`).then((res) =>
      res.json()
    );
    const dataAbout = await fetchReddit(`/r/${valueHeader}/about`).then((res) =>
      res.json()
    );
    this.setState({ pageContent: data, showSearchResults: false, dataAbout, showHeader:true });
  };

  render() {
    const { pageContent } = this.state;
    if (!pageContent) {
      return <p>Loading...</p>;
    }

    console.log("Please", pageContent.data);
    return (
      <section>
        <Main func={this.buttonClick} headerShow = {this.state.showHeader} 
        dataAbout={this.state.dataAbout} showSearchResults={this.state.showSearchResults}
        showSearchResults={this.state.showSearchResults}/>
        <div className="body_color">
          {pageContent.data.children.length < 1 ? (
            <HeaderSearchRes />
          ) : this.state.showSearchResults ? 


          (pageContent.data.children.map((child, index) =>
              index < 10 ? (
                <Communities
                  post={child.data}
                  funcHeader={this.buttonClickHeader} //true
                />) : null)) : 


      (pageContent.data.children.map((child, index) =>
              index < 10 ? <Subreddit  post={child.data} /> : null
            )
          )}
        </div>
      </section>
    );
  }
}

export default withRedditApi(Home);
