import React from "react";
import './Search.css';
import styled from "styled-components";
import search_icon from '../../assets/search-icon.svg'

const Search = () =>{

  const Img = styled.img.attrs({
    src: search_icon
  })`
    padding: 9px;`

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      localStorage.setItem('searchPhrase', e.target.value);
      document.location.assign('http://localhost:3000/');
    }
  }
  return(<div className={'search-container'}>
      <Img/>
    <input type={'text'} className={'search'} placeholder={'Search'} onKeyDown={handleKeyDown}/>
    </div>
  )
}
export {Search};