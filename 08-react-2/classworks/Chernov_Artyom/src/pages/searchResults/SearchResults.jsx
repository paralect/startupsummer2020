import React, {useContext, useEffect} from 'react';
import {ContextApp} from '../../reducers/redditReducer';
import SearchResult from '../../components/searchResult/SearchResult';
import {sendSearchRequest} from '../../reducers/api';
import {withRedditApi} from "../../hooks/useRedditApi";
import Redirect from 'react-router-dom/es/Redirect';

const SearchResults = (props) => {
  const {state, dispatch} = useContext(ContextApp);
  let name = props.match.params.name;
  useEffect(() => {
    sendSearchRequest(dispatch, props.fetchReddit, name);
  }, [name])

  if (!state.searchResults) {
    return (
        <p>Loading...</p>
    );
  }

  if(state.searchResults.length === 0){
    return <Redirect to={"/not_found"}/>
  }

  return (
      <>
        <section>
          {state.searchResults.map(child => (
              <SearchResult
                  key={child.data.id}
                  display_name={child.data.display_name}
                  description={child.data.public_description}
                  img={child.data.header_img}
                  subscribers={child.data.subscribers}
              />
          ))}
        </section>
      </>
  );
};

export default withRedditApi(SearchResults);