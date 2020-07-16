import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { RedditApiTokenProvider } from 'hooks/useRedditApi';
import App from './App';

import { Provider } from "react-redux";
import store from "./store";

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <RedditApiTokenProvider>
          <App />
        </RedditApiTokenProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
