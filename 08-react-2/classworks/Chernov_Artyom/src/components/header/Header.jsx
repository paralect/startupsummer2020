import React, {useContext, useEffect} from 'react';
import s from './Header.module.css';
import Search from '../search/Search';
import reddit_logo from '../../assets/images/reddit-logo.svg';
import react_logo from '../../assets/images/react-logo.svg';
import {ContextApp} from '../../reducers/redditReducer';

const Header = (props) => {
  const {state, dispatch} = useContext(ContextApp);

  return (
      <>
        <div className={s.header}>
          <img src={reddit_logo} alt="reddit logo" className={s.header__logo}/>
          <Search/>
        </div>
        <div className={s.header__footer + ' ' + s.bg_cl_orange}/>
        <div className={s.header__footer}>
          <div className={s.header__footer__logo}>
            { state.currentSubreddit ?
                    <>
                      <img src={state.currentSubreddit?.header_img || react_logo} alt="logo"/>
                      <h1>{state.currentSubreddit?.display_name || 'no name'}</h1>
                    </>
                 : null}
          </div>
        </div>
      </>
  );
};

export default Header;