import React, {useEffect, useState, useRef} from 'react';
import {useRouteMatch} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Header from 'components/header'
import Pages from 'pages';
import {withRedditApi} from './hooks/useRedditApi';
import {setPostsNull, setSearchValue, fetchPosts} from "./resourses/actions";

function App(props) {
  const dispatch = useDispatch();
  const getSearchValue = useSelector((state) => state.value);
  let getSubreddits = useSelector((state)=>state.posts);
  console.log('getSubreddits from app.js', getSubreddits);

  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [reactAbout, setReactAbout] = useState(null);


  const getdata = async (name = 'r/react') => {
    const {fetchReddit} = props;
    const data = await fetchReddit(`/${name}/hot`).then(res => res.json());
    setReactSubreddit(data);
    const about = await fetchReddit(`/${name}/about`).then(res => res.json());
    setReactAbout(about);
  };


  useEffect(() => {
    if (props.isToken) {
      getdata();
      dispatch(setPostsNull());
    }
  }, [props.isToken]);

  const prevSubUrl = useRef();
  let match = useRouteMatch("/subreddit/:subredditUrl");
  console.log('Match', match);

  useEffect(() => {
    if (match && match.params.subredditUrl !== prevSubUrl.current) {
      prevSubUrl.current = match.params.subredditUrl;
      //getSubreddits(match.params.subredditUrl);
      getdata(`r/${match.params.subredditUrl}`);
      //setReactSubreddits(null);
      dispatch(setPostsNull());
    }
  }, [match]);


  const handleOnChangeInput = (event) => {
    //setSearchValue(event.target.value);
    dispatch(setSearchValue(event.target.value));
  }

  const handleBtnClick = (event) => {
    console.log('Button clicked')
    if (getSearchValue) {
      dispatch(fetchPosts(props, getSearchValue));
    }
  }

  getSubreddits = useSelector((state)=>state.posts);

  return (
      <main>
        <header>
          <Header handleOnChangeInput={handleOnChangeInput} handleBtnClick={handleBtnClick}/>
        </header>
        <section>
          <Pages reactSubreddit={reactSubreddit} reactAbout={reactAbout}
                 reactSubreddits={getSubreddits} handle={getdata}/>
        </section>
      </main>
  );
}

export default withRedditApi(App);
