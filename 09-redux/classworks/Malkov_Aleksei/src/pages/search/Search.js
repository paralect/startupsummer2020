import React, { useState, useEffect } from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import Header from 'components/header';
import Title from 'components/title';
import styles from './search.module.css';
import SearchResult from 'components/search_result';
import { ReactComponent as Face} from 'assets/face.svg';
import { useLocation } from "react-router-dom";
import Spinner from 'components/spinner';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search(props){
  const { fetchReddit } = props;
  const [emptySearch, setEmptySearch] = useState(false);
  const [searchResults, setSearchResults] = props.searchResults;
  const [search, setSearch] = props.search;
  const query = useQuery();

  useEffect(() => {
    if (search.length === 0) submit(null, query.get("q"));
    else {
      console.log('hihi', );
      submit(null, query.get("q"));
    }
    // eslint-disable-next-line
  }, []);

  const submit = async (event, value) => {
    console.log(value);
    if (event) event.preventDefault();
    const data = await fetchReddit(`/subreddits/search/?q=${value}`, { method: 'GET' }).then(res => res.json());
    console.log(data.data.children);
    setSearch(value);
    if (!data.data.children.length) {
      setEmptySearch(true);
      return;
    } else {
      setEmptySearch(false);
    }
    const allAbouts = [];
    const uniqID = [];
    data.data.children.forEach( async (result) => {
      const resultUrlPrefix = `/${result.data.display_name_prefixed}/about`;
      const aboutResult = await fetchReddit(resultUrlPrefix).then(res => res.json());
      if (aboutResult && aboutResult.data) {
        const id = aboutResult.data.id;
        if (!uniqID.includes(id)) {
          uniqID.push(id);
          allAbouts.push(aboutResult.data);
          setSearchResults([...allAbouts]);
        }
      }
    });
  }

  return (
    <main>
      <Header submit={submit} isSearchPage search={props.search} />
      <section className={styles.container}>
        {
          !emptySearch && <Title search={search} />
        }
        {
          !searchResults.length && <Spinner />
        }
        {!emptySearch && searchResults.length > 0
          && <div className={styles.search__results}>
            {searchResults.map(child => (
            child && <SearchResult
              key={child.id} 
              about={child}
            />
          ))}
          </div>
        }
        {
          emptySearch
          && <div className={styles.error__container}>
            <div className={styles.error}>
              <Face />
              <span>Sorry, there were no community results for “ <b>{search}</b> ”</span>
            </div>
          </div>
        }
      </section>
    </main>
    
  );


}

export default withRedditApi(Search);
