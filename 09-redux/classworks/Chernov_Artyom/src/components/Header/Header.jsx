import React from 'react';
import s from './Header.module.css';
import Search from '../Search/Search';
import reddit_logo from '../../assets/images/reddit-logo.svg';
import react_logo from '../../assets/images/react-logo.svg';
import { useSelector } from "react-redux";
import { selectCurrentSubreddit } from "../../resourses/subreddits/subreddits.selectors";

const Header = (props) => {
  const currentSubreddit = useSelector(selectCurrentSubreddit)

  return (
      <>
        <div className={s.header}>
          <img src={reddit_logo} alt="reddit logo" className={s.header__logo}/>
          <Search/>
        </div>
        <div className={s.header__footer + ' ' + s.bg_cl_orange}/>
        <div className={s.header__footer}>
          <div className={s.header__footer__logo}>
            { currentSubreddit ?
                    <>
                      <img src={currentSubreddit?.header_img || react_logo} alt="logo"/>
                      <h1>{currentSubreddit?.display_name || 'no name'}</h1>
                    </>
                 : null}
          </div>
        </div>
      </>
  );
};

export default Header;