import React from 'react';
import {withRedditApi} from 'hooks/useRedditApi';
import Header from 'components/header';
import Title from 'components/title';
import styles from './search.module.css';
import SearchResult from 'components/search_result';
import { ReactComponent as Face} from 'assets/face.svg';
import Spinner from 'components/spinner';
import * as selectors from 'resources/selector';
import { useSelector } from 'react-redux';


function Search(props){
  const searchResultsGlobal = useSelector(selectors.getSearchResultsWithAbouts);
  const emptySearch = useSelector(selectors.getIsSearchEmpty);

  return (
    <main>
      <Header isSearchPage search={props.search} />
      <section className={styles.container}>
        {
          !emptySearch && <Title />
        }
        {
          !emptySearch && (!searchResultsGlobal || searchResultsGlobal.length === 0) && <Spinner />
        }
        {!emptySearch && searchResultsGlobal?.length > 0
          && <div className={styles.search__results}>
            {searchResultsGlobal.map(child => (
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
              <span>Sorry, there were no community results for “ <b>{}</b> ”</span>
            </div>
          </div>
        }
      </section>
    </main>
    
  );


}

export default withRedditApi(Search);
