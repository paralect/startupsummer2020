import React, { useState, useEffect } from 'react';
import styles from './search-bar.module.css';
import { ReactComponent as Search } from '../../assets/search.svg';
import useRedditApi, { withRedditApi } from 'hooks/useRedditApi';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as selectors from '../../resources/selector';
import { useSelector } from 'react-redux';

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
  }, [inputSearch]);

  const submitSearch = (e) => {
    e.preventDefault();
    history.push('/search?q=' + inputSearch);
    submit(e, inputSearch);
  };

  const submit = async (event, value) => {
    if (event) event.preventDefault();
    const data = await fetchReddit(`/subreddits/search/?q=${value}`, { method: 'GET' }).then(res => res.json());
    console.log(data.data.children);
    dispatch({type: 'isSearchEmpty:set', payload: {isSearchEmpty: !data?.data?.children?.length} });
    let allAbouts = [];
    const uniqID = [];
    data.data.children.forEach( async (result) => {
      const resultUrlPrefix = `/${result.data.display_name_prefixed}/about`;
      const aboutResult = await fetchReddit(resultUrlPrefix).then(res => res.json());
      if (aboutResult && aboutResult.data) {
        const id = aboutResult.data.id;
        if (!uniqID.includes(id)) {
          uniqID.push(id);
          allAbouts = [...allAbouts, aboutResult.data];
          dispatch({type: 'searchResults:set', payload: {searchResults: allAbouts} });
        }
      }
    });
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
