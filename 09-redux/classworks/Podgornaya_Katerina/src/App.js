import React from 'react';
import { useDispatch } from 'react-redux';
import Pages from './pages';
import logo from './images/reddit_logo.svg';
import search from './images/search_icon.svg';
import styles from './index.module.css';
import { phraseAction } from './resources/phrase/phrase.action';

function App() {
  const dispatch = useDispatch();

  const onClickEnter = (event) => {
    if (event.keyCode === 13) {
      dispatch(phraseAction(event.target.value));
    }
  };

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header_top}>
          <img src={logo}></img>
          <div className={styles.searchField}>
            <img className={styles.searchSvg} src={search} />
            <input className={styles.input} placeholder='Search' onKeyDown={onClickEnter}/>
          </div>
        </div>
        <div className={styles.header_bot}></div>
      </header>
      <section>
        <Pages />
      </section>
    </main>
  );
}

export default App;
