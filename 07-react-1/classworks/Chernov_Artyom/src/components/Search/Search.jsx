import React from 'react';
import s from './Search.module.css'
import search from '../../assets/icons/search.svg';

const Search = ({inputValue, handleClick, sendSearchRequest}) => {
  return(
      <>
        <div className={s.search_form}>
          <img src={search} alt=""/>
          <span>
          <input className={s.search_form__input} type="text" placeholder={"Search"} value={inputValue} onChange={handleClick}/>
        </span>
        </div>
        <button onClick={(e) => {
          e.preventDefault()
          sendSearchRequest(inputValue);
        }}>Search</button>
      </>
  )
}

export default Search
