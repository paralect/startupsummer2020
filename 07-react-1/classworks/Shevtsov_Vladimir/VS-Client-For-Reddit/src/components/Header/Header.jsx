import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar';

import './header.css';
import logo from '../../assets/reddit_logo.svg';

export default () => (
  <>
    <div className="header">
      <div className="header-logo">{logo}</div>
      <SearchBar />
    </div>
    <div className="header-bottom"></div>
  </>
);
