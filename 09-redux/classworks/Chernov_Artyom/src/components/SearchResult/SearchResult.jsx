import React from 'react';
import s from './SearchResult.module.css';
import noImage from '../../assets/images/unnamed.png';
import { Link } from 'react-router-dom';

const SearchResult = ({keyId, display_name, img, description, subscribers}) => {
  return (
      <Link to={`/subreddit/${display_name}`} className={s.search_result}>
        <div className={s.search_result__left}>
          <div className={s.search_result__logo}>
            <img src={img || noImage} alt=""/>
          </div>
          <div className={s.search_result__info}>
            <p>title {display_name}</p>
            <p>{subscribers} members</p>
          </div>
        </div>
        <div className={s.search_result__info}>
          {description}
        </div>
      </Link>
  );
};

export default SearchResult;