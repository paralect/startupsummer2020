import React, { useState, useEffect} from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
// import InputSearch from 'components/inputSearch';
import Header from 'components/Header';
import CommunityContainer from 'components/CommunityContainer';
import List from 'components/List';
import Item from 'components/Item';
import ResultSearch from 'components/resultSearch';


const Home = (props) => {
 
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [title, setTitle] = useState(null);
  const [subreddit, setSubreddit] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showPosts, setShowPosts] = useState(true);

  const getRedditData = async (subreddit = 'react') => {
    const { fetchReddit } = props;
    console.log(subreddit, 'GSYHSYH');
    const data = await fetchReddit(`/r/${subreddit}/hot`).then(res => res.json());
    const titleData = await fetchReddit(`/r/${subreddit}/about`).then(res => res.json());
    const subredditData = await fetchReddit(`/subreddits/search?q=${subreddit}`).then(res => res.json());


    setReactSubreddit(data);
    setTitle (titleData);
    setSubreddit(subredditData);
  }

  const subredditClickHandler = async () => {
    await getRedditData();
   setShowPosts(true)
    
  }

 
  useEffect(() => {getRedditData();}, [])

    const onSearchChange = (inputValue) => {
    setInputValue (inputValue.target.value);
    setShowPosts(!inputValue.length);
    getRedditData(inputValue.target.value);
}


 
    if (!reactSubreddit || !title || !subreddit) {
      return (
        <p>Loading...</p>
      );
    }

    const dataArr = reactSubreddit.data && reactSubreddit.data.children;
    const titleArr = title.data;

    return (
      <section>
       {/* <InputSearch/> */}
       <Header onSearchChange={onSearchChange}/>
       <CommunityContainer data={dataArr} titleData = {titleArr}/>
       {!reactSubreddit.data 
        ? <p>No</p> 
        : (<List 
            data={dataArr}
            searchEl={subreddit.data.children} 
            inputValue={inputValue} 
            clickHandler={subredditClickHandler}
          />)}
       {/* <ResultSearch subredditData={subredditArr}/> */}


      </section>
    );
  }


export default withRedditApi(Home);