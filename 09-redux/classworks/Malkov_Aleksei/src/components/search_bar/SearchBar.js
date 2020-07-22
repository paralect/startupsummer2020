import React, { useState, useEffect } from 'react';
import styles from './search-bar.module.css';
import { ReactComponent as Search } from '../../assets/search.svg';
import useRedditApi, { withRedditApi } from 'hooks/useRedditApi';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getSubreddits from 'components/services/getSubreddits';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchBar({ isSearchPage }) {
  const [inputSearch, setInputSearch] = useState('');
  const [fetchReddit,,] = useRedditApi();
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSearchPage) submit(null, query.get("q"));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch({type: 'search:set', payload: {search: inputSearch} });
    // eslint-disable-next-line
  }, [inputSearch]);

  const submitSearch = (e) => {
    e.preventDefault();
    history.push('/search?q=' + inputSearch);
    submit(e, inputSearch);
  };

  const submit = async (event, value) => {
    if (event) event.preventDefault();
    dispatch(getSubreddits(fetchReddit, value));
  }

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
