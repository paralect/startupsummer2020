import React from "react";
import './Search.css'
import search_icon from '../../assets/search-icon.svg'

const Search = () =>{
  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      localStorage.setItem('searchPhrase', e.target.value);
      document.location.assign('http://localhost:3000/');
    }
  }
  return(<div className={'search-container'}>
      <img src={search_icon} className={'search-icon'}/>
    <input type={'text'} className={'search'} placeholder={'Search'} onKeyDown={handleKeyDown}/>
    </div>
  )
}
export {Search};