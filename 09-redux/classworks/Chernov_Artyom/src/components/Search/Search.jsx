import React, { useState } from 'react';
import s from './Search.module.css';
import search from '../../assets/icons/search.svg';
import { withRedditApi } from '../../hooks/useRedditApi';
import { Link } from 'react-router-dom';

const Search = (props) => {
  const [inputValue, SetInputValue] = useState('');

  return (
      <>
        <div className={s.search_form}>
          <img src={search} alt=""/>
          <span>
          <input className={s.search_form__input}
                 type="text"
                 placeholder={'Search'}
                 value={inputValue}
                 onChange={(e) => SetInputValue(e.target.value)}/>
          </span>
        </div>

        <Link to={`/search_results/${inputValue}`}>Search</Link>
      </>
  );
};

export default withRedditApi(Search);
