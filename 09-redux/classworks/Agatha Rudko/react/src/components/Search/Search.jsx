import React from "react";
import './Search.css';
import styled from "styled-components";
import search_icon from '../../assets/search-icon.svg'
import store from "../../resources/store";
import { push } from 'connected-react-router'

const Search = () =>{

  const Img = styled.img.attrs({
    src: search_icon
  })`
    padding: 9px;`

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      localStorage.setItem('searchPhrase', e.target.value);
      store.dispatch({type: 'ADD_SEARCH_INPUT', input: e.target.value});
      store.dispatch(push('/'))
    }
  }
  return(<div className={'search-container'}>
      <Img/>
    <input type={'text'} className={'search'} placeholder={'Search'} onKeyDown={handleKeyDown}/>
    </div>
  )
}
export {Search};
