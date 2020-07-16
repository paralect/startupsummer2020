import React, { useState } from 'react';
import styles from './search-bar.module.css';
import { ReactComponent as Search } from '../../assets/search.svg';
import { withRedditApi } from 'hooks/useRedditApi';
import { useHistory } from 'react-router-dom';


function SearchBar({ submit, isSearchPage, search }) {
  const [inputSearch, setInputSearch] = useState('');
  const [, setSearchMain] = search;
  const history = useHistory();
  const submitSearch = (e) => {
    e.preventDefault();
    if (isSearchPage) {
      history.push('/search?q=' + inputSearch);
      submit(e, inputSearch);
    } else {
      submit(inputSearch);
      setSearchMain(inputSearch);
    }
  };

  return (
    <form className={styles.container} onSubmit={(e) => submitSearch(e)}>
      <Search className={styles.icon} />
      <input
        className={styles.input__search}
        placeholder="Search"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </form>
  );
  
  
}

export default withRedditApi(SearchBar);
