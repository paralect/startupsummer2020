import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { RedditApiTokenProvider } from 'hooks/useRedditApi';
import store from './resources/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RedditApiTokenProvider>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </RedditApiTokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
