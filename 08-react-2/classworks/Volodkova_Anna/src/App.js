import React, {useEffect, useState, useRef} from 'react';
import Header from 'components/header'
import Pages from 'pages';
import {withRedditApi} from './hooks/useRedditApi';

function App(props) {

  const [state, setState] = useState({
    searchValue: '',
    isClicked: false,
    reactSubreddit: null,
    reactAbout: null,
    reactSubreddits: null,
    subClicked: false,
  });

  const [searchValue, setSearchValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [reactAbout, setReactAbout] = useState(null);
  const [reactSubreddits, setReactSubreddits] = useState(null);
  const [subClicked, setSubClicked] = useState(null);


  const getdata = async (name = 'r/react') => {
    const {fetchReddit} = props;
    const data = await fetchReddit(`/${name}/hot`).then(res => res.json());
    console.log('Hot', data);
    setReactSubreddit(data);
    const about = await fetchReddit(`/${name}/about`).then(res => res.json());
    console.log('About', about);
    setReactAbout(about);
    setReactSubreddits(null);
  };


  useEffect(() => {
    if (props.isToken) {
      getdata();
    }
  }, [props.isToken]);


  const getSubreddits = async (str) => {
    const {fetchReddit} = props;
    const data = await fetchReddit('/subreddits/search?q=' + str.toString()).then(res => res.json());
    setReactSubreddits(data);
    console.log('reactSubreddits', data);
    //reactSubreddits.data.children[i].data.url
  }


  const handleOnChangeInput = (event) => {
    setSearchValue(event.target.value);
  }

  const handleBtnClick = (event) => {
    console.log('Button clicked')
    if (searchValue) {
      getSubreddits(searchValue);
    }
  }

  return (
    <main>
      <header>
        <Header handleOnChangeInput={handleOnChangeInput} handleBtnClick={handleBtnClick}/>
      </header>
      <section>
        <Pages reactSubreddit={reactSubreddit} reactAbout={reactAbout}
               reactSubreddits={reactSubreddits} handle={getdata}/>
      </section>
    </main>
  );
}

export default withRedditApi(App);
