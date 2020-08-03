import React, {useEffect} from 'react';

import Subreddit from '../../components/Subreddit/Subreddit';
import { Redirect } from "react-router-dom"
import { getSubreddits } from "../../resourses/subreddits/subreddits.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits } from "../../resourses/subreddits/subreddits.selectors";
import { getCurrentSubreddit } from "../../resourses/subreddits/subreddits.actions";

const Home = (props) => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits)

  let name = props.match.params.name || 'react';
  useEffect(() => {
    dispatch(getSubreddits(name))
    dispatch(getCurrentSubreddit(name));
  }, []);

  if (!subreddits) {
    return (
        <p>Loading...</p>
    );
  }

  if(subreddits.length === 0){
    return <Redirect to={"/not_found"}/>
  }

  return (
      <>
        <section>
          {subreddits.map(child => (
              <Subreddit
                  key={child.data.id}
                  author={child.data.author}
                  title={child.data.title}
                  selftext={child.data.selftext}
                  time={child.data.created}
              />
          ))}
        </section>
      </>
  );
};

export default Home;
