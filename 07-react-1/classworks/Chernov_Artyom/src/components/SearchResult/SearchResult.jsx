import React from 'react';
import s from './SearchResult.module.css';
import noImage from '../../assets/images/unnamed.png'

const SearchResult = ({keyId, display_name, img, description, subscribers, selectSubreddit}) => {
  return (
      <div key={keyId} id className={s.search_result} onClick={(e) => {
        e.preventDefault();
        selectSubreddit(display_name, img);
      }}>

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
      </div>
  );
};

export default SearchResult;