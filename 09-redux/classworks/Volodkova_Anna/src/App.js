import React, { useEffect, useState, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchValue } from './resourses/searchValue.selectors';
import Header from 'components/header';
import Pages from 'pages';
import { withRedditApi } from './hooks/useRedditApi';
import { setPostsNull, setSearchValue, fetchPosts } from "./resourses/actions";

function App(props) {
  const dispatch = useDispatch();
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [reactAbout, setReactAbout] = useState(null);
  const searchValue = useSelector(getSearchValue);



  const getData = async (name = 'r/react') => {
    const {fetchReddit} = props;
    const data = await fetchReddit(`/${name}/hot`).then(res => res.json());
    setReactSubreddit(data);
    const about = await fetchReddit(`/${name}/about`).then(res => res.json());
    setReactAbout(about);
  };


  useEffect(() => {
    if (props.isToken) {
      getData();
      dispatch(setPostsNull());
    }
  }, [props.isToken]);

  const prevSubUrl = useRef();
  let match = useRouteMatch("/subreddit/:subredditUrl");
  console.log('Match', match);

  useEffect(() => {
    if (match && match.params.subredditUrl !== prevSubUrl.current) {
      prevSubUrl.current = match.params.subredditUrl;
      getData(`r/${match.params.subredditUrl}`);
      dispatch(setPostsNull());
    }
  }, [match]);


  const handleOnChangeInput = (event) => {
    dispatch(setSearchValue(event.target.value));
  }

  const handleBtnClick = () => {
    if (searchValue) {
      dispatch(fetchPosts(props, searchValue));
    }
  }


  return (
      <main>
        <header>
          <Header handleOnChangeInput={handleOnChangeInput} handleBtnClick={handleBtnClick}/>
        </header>
        <section>
          <Pages reactSubreddit={reactSubreddit}
                 reactAbout={reactAbout}
                 handle={getData}/>
        </section>
      </main>
  );
}

export default withRedditApi(App);
