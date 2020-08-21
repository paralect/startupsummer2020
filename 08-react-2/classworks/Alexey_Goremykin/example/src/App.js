import React, {useState, useEffect} from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import Pages from 'pages';
import Header from 'components/Header/header';
import Title from 'components/Title/title';

function App(props) {

  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [posts, setPosts] = useState(null);


  const fetchSubreddits = async (src = 'react') => {
    const { fetchReddit } = props;
    const data = await fetchReddit(`/r/react/subreddits/search?q=${src}`).then(res => res.json());
    setReactSubreddit(data)
    setInputValue(src)
  }

  const fetchPosts = async (src = '/r/react/') => {
    const { fetchReddit } = props;
    const data = await fetchReddit(`${src}hot`).then(res => res.json());
    setPosts(data)
  } 


  return (
    <main>
      <header>
        <Header fetchSubreddits={fetchSubreddits} />
        <Title inputValue={inputValue} posts={posts} />
      </header>
      <section>
        <Pages reactSubreddit={reactSubreddit} posts={posts} fetchPosts={fetchPosts} />
      </section>
    </main>
  );
}

export default withRedditApi(App);
