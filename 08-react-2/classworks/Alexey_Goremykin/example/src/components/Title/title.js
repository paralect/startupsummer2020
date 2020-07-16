import React, {useState, useEffect} from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import styles from "./title.module.css";
import ReactLogo from './reactLogo.svg'

function Title(props) {
  const [reactSubreddit, setReactSubreddit] = useState('')
  console.log(props.posts)
  useEffect(() => {
    (async () => {
        const { fetchReddit } = props;
        const data = await fetchReddit(`/r/react/about`).then(res => res.json());
        setReactSubreddit(data);
        console.log(reactSubreddit)
    })();   
}, [])


console.log(reactSubreddit)
  return (
    <div>
      <div>
        <div className={styles.orangeTitlePanel}>
        </div>
        <div className={styles.title}>
        <img className={styles.subredditLogo} src={ReactLogo} />
          <h1>
            {reactSubreddit? reactSubreddit.data.title : 'react'}
            <p className={styles.displayNamePrefix} >{reactSubreddit? reactSubreddit.display_name_prefixed : ' '}</p>
          </h1>
        </div>
      </div>
    </div>
  );
}
  
  export default withRedditApi(Title);