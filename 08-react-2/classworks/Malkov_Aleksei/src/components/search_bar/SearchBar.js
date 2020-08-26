import React from 'react';
import styles from './search-bar.module.css';
import { ReactComponent as Search } from '../../assets/search.svg';
import { withRedditApi } from 'hooks/useRedditApi';
import { useHistory } from 'react-router-dom';


function SearchBar({ submit, isSearchPage, search }) {
  const [searchMain, setSearchMain] = search;
  const history = useHistory();
  const submitSearch = (e) => {
    e.preventDefault();
    history.push('/search?q=' + searchMain);
    if (isSearchPage) {
      submit(e, searchMain);
    }
  };

  return (
    <form className={styles.container} onSubmit={(e) => submitSearch(e)}>
      <Search className={styles.icon} />
      <input
        className={styles.input__search}
        placeholder="Search"
        value={searchMain}
        onChange={(e) => setSearchMain(e.target.value)}
      />
    </form>
  );
}

export default withRedditApi(SearchBar);
