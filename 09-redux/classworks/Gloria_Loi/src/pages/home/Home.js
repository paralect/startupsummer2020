import React, { useState, useEffect } from "react";

import { withRedditApi } from "hooks/useRedditApi";
import { Route, useHistory, Switch } from "react-router-dom";

import SubredditsList from "../../components/SubredditList";
import MainContainer from "components/MainContainer";
import Loader from "../../components/Loader";
import Error from "../../components/ErrorComponent";

const Home = (props) => {
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [subRedditTitle, setSubRedditTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const history = useHistory();

  const { fetchReddit, inputString } = props;

  const isLoading = loading || !reactSubreddit || !subRedditTitle;

  const fetchPostsArticles = async (topic = "react") => {
    setLoading(true);

    const [data, title] = await Promise.all([
      fetchReddit(`/r/${topic}/hot?limit=10`).then((res) => res.json()),
      fetchReddit(`/r/${topic}/about?limit=10`).then((res) => res.json()),
    ]);
    setLoading(false);
    setReactSubreddit(data);
    setSearchError(false);
    setSubRedditTitle(title);

    history.push("/");
  };

  useEffect(() => {
    fetchPostsArticles();
  }, []);

  useEffect(() => {
    displaySubreddits();
  }, [inputString]);

  const displaySubreddits = async () => {
    if (inputString === "") {
      fetchPostsArticles();
      return;
    }
    const data = await fetchReddit(
      `/subreddits/search?limit=10&q=${inputString}`
    ).then((res) => res.json());
    setReactSubreddit(data);
    if ((data.data.children && data.data.children.length === 0) || !data) {
      setSearchError(true);
    } else {
      setSearchError(false);
      history.push("/search");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <>
      {searchError || !reactSubreddit.data ? (
        <Error inputString={inputString} />
      ) : (
        <Switch>
          {inputString !== "" && (
            <Route
              path="/search"
              exact
              render={() => (
                <SubredditsList
                  handlePostClick={fetchPostsArticles}
                  data={reactSubreddit.data.children}
                  title={inputString}
                />
              )}
            />
          )}
          <Route
            path="/"
            render={() => (
              <MainContainer
                data={reactSubreddit.data.children}
                title={subRedditTitle}
              />
            )}
          />
        </Switch>
      )}
    </>
  );
};
export default withRedditApi(Home);
