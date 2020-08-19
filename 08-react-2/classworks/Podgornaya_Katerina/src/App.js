import React, { useState, useEffect } from 'react';
import Pages from 'pages';
import logo from './images/reddit_logo.svg';
import search from './images/search_icon.svg';
import styles from './index.module.css';

function App() {
  const [phrase, setPhrase] = useState(null);

  const onClickEnter = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value);
      setPhrase(event.target.value);
    };
  }

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header_top}>
          <img src={logo}></img>
          <div className={styles.searchField}>
            <img className={styles.searchSvg} src={search} />
            <input className={styles.input} placeholder='Search' onKeyDown={onClickEnter} />
          </div>
        </div>
        <div className={styles.header_bot}></div>
      </header>
      <section>
        <Pages phrase={phrase} />
      </section>
    </main>
  );
}

export default App;
