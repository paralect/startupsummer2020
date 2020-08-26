import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { RedditApiTokenProvider } from 'hooks/useRedditApi';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RedditApiTokenProvider>
        <App />
      </RedditApiTokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
