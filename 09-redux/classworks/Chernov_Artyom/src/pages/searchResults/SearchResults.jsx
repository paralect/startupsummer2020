import React, { useEffect } from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';
import { withRedditApi } from "../../hooks/useRedditApi";
import { Redirect } from "react-router-dom"
import { getSearchResults } from '../../resourses/search-results/search-results.actions'
import { selectSearchResults } from '../../resourses/search-results/search-results.selectors'
import { useDispatch, useSelector } from 'react-redux';

const SearchResults = (props) => {
  const dispatch = useDispatch()
  const search = useSelector(selectSearchResults)
  let name = props.match.params.name;

  useEffect(() => {
    dispatch(getSearchResults(name))
  }, [name])

  if (!search) {
    return (
        <p>Loading...</p>
    );
  }

  if(search.length === 0){
    return <Redirect to={"/not_found"}/>
  }

  return (
      <>
        <section>
          {search.map(child => (
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