import React, {useState, useEffect} from "react";

import { withRedditApi } from "hooks/useRedditApi";

import Header from "../../components/HeaderComponent";
import SubredditsList from "../../components/SubredditList";
import MainContainer from "components/MainContainer";
import Block from "../../components/Block";
import Loader from "../../components/Loader";
import Error from "../../components/ErrorComponent";



const Home = (props) => {
    const [reactSubreddit, setReactSubreddit] = useState(null);
    const [subRedditTitle, setSubRedditTitle] = useState(null);
    const [inputString, setInputString] = useState("");
    const [showSearchList, setShowSearchList] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchError, setSearchError] = useState(false);

    const isLoading = loading || !reactSubreddit;

    const fetchPostsArticles = async (topic = "react") => {
    const { fetchReddit } = props;
    setLoading(true)

    const [data, title] = await Promise.all([
      fetchReddit(`/r/${topic}/hot?limit=10`).then((res) => res.json()),
      fetchReddit(`/r/${topic}/about?limit=10`).then((res) => res.json()),
    ]);
    setLoading(false);
    setReactSubreddit(data);
    setSearchError(false);
    setShowSearchList(false);
    setSubRedditTitle(title);
  };

    useEffect(()=>{
        fetchPostsArticles();
    }, [])
    useEffect(()=>{
        displaySubreddits();
    }, [inputString])


    const displaySubreddits = async () => {
        const { fetchReddit } = props;
    
        if (inputString.trim() === "") {
          fetchPostsArticles();
          return;
        }
    
        const data = await fetchReddit(
          `/subreddits/search?limit=10&q=${inputString}`
        ).then((res) => res.json());
        if ((data.data.children && data.data.children.length === 0) || !data) {
          setReactSubreddit(data);
          setSearchError(true);
          setShowSearchList(false)
        } else {
          setReactSubreddit(data);
          setSearchError(false);
          setShowSearchList(true)
        }
      };


    const handleChange = ({ target: { value: inputString } }) => setInputString({ inputString });

    return (
        <section>
          <Header handleChange={handleChange} />
          <Block />
  
          {isLoading ? (
            <Loader />
          ) : showSearchList ? (
            <SubredditsList
              handlePostClick={fetchPostsArticles}
              data={reactSubreddit.data.children}
              title={inputString}
            />
          ) : searchError || !reactSubreddit.data ? (
            <Error inputString={inputString} />
          ) : (
            <MainContainer
              data={reactSubreddit.data.children}
              title={subRedditTitle}
            />
          )}
        </section>
      );
}
export default withRedditApi(Home);









import React from "react";

import { withRedditApi } from "hooks/useRedditApi";

import Header from "../../components/HeaderComponent";
import SubredditsList from "../../components/SubredditList";
import MainContainer from "components/MainContainer";
import Block from "../../components/Block";
import Loader from "../../components/Loader";
import Error from "../../components/ErrorComponent";

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    subRedditTitle: null,
    inputString: "",
    showSearchList: false,
    loading: false,
    searchError: false,
  };

  fetchPostsArticles = async (topic = "react") => {
    const { fetchReddit } = this.props;

    this.setState({ loading: true });

    const [data, title] = await Promise.all([
      fetchReddit(`/r/${topic}/hot?limit=10`).then((res) => res.json()),
      fetchReddit(`/r/${topic}/about?limit=10`).then((res) => res.json()),
    ]);
    this.setState({
      reactSubreddit: data,
      subRedditTitle: title,
      loading: false,
      showSearchList: false,
      searchError: false,
    });
  };

  componentDidMount() {
    this.fetchPostsArticles();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.inputString !== this.state.inputString) {
      this.displaySubreddits();
    }
  }

  handleChange = ({ target: { value: inputString } }) =>
    this.setState({ inputString });

  displaySubreddits = async () => {
    const { fetchReddit } = this.props;

    if (this.state.inputString.trim() === "") {
      this.fetchPostsArticles();
      return;
    }

    const data = await fetchReddit(
      `/subreddits/search?limit=10&q=${this.state.inputString}`
    ).then((res) => res.json());
    if ((data.data.children && data.data.children.length === 0) || !data) {
      this.setState({
        reactSubreddit: data,
        searchError: true,
        showSearchList: false,
      });
    } else {
      this.setState({
        reactSubreddit: data,
        searchError: false,
        showSearchList: true,
      });
    }
  };

  render() {
    const {
      reactSubreddit,
      subRedditTitle,
      showSearchList,
      inputString,
      loading,
      searchError,
    } = this.state;

    const isLoading = loading || !reactSubreddit;

    return (
      <section>
        <Header handleChange={this.handleChange} />
        <Block />

        {isLoading ? (
          <Loader />
        ) : showSearchList ? (
          <SubredditsList
            handlePostClick={this.fetchPostsArticles}
            data={reactSubreddit.data.children}
            title={inputString}
          />
        ) : searchError || !reactSubreddit.data ? (
          <Error inputString={this.state.inputString} />
        ) : (
          <MainContainer
            data={reactSubreddit.data.children}
            title={subRedditTitle}
          />
        )}
      </section>
    );
  }
}

export default withRedditApi(Home);

