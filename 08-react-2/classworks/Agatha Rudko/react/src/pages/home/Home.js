import React, { useEffect, useState} from 'react';
import useRedditApi, {withRedditApi} from 'hooks/useRedditApi';
import {Post} from '../../components/Post/Post';
import {InfoBar} from "../../components/InfoBar/InfoBar";
import './Home.css'


const Home = () => {
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [about, setAbout] = useState(null);
  const [fetchReddit] = useRedditApi();

  useEffect(() => {
    async function fetch() {
      const data = await fetchReddit(`/${localStorage.getItem('askedSubreddit' || '')}/hot`).then(res => res.json());
      const about = await fetchReddit(`/${localStorage.getItem('askedSubreddit' || '')}/about`).then(res => res.json());
      setReactSubreddit(data);
      setAbout(about);
    }
    fetch();
  }, []);

  if (!reactSubreddit || !about) {
      return (
        <p>Loading...</p>
      );
    }
  return (<>
      <InfoBar text={about.data.title} subtext={about.data.display_name_prefixed} imageUrl={about.data.icon_img}/>
      <section className={'posts_contaner'}>
        {reactSubreddit.data.children.map(child => (
          <Post postId={child.data.id} postName={child.data.title} postText={child.data.selftext} username={child.data.author} creationTime={child.data.created_utc}/>
        ))}
      </section>
    </>
  );
}

export default withRedditApi(Home);
