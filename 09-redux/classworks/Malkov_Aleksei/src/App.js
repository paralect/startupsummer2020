import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import Pages from 'pages';
import store from 'resources/store';
import * as selectors from 'resources/selector';

function App() {
  const [reactSubreddit, setReactSubreddit] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [about, setAbout] = useState(null);
  const [search, setSearch] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);

  return (
    <Provider store={store}>
      <Pages
        reactSubreddit={[reactSubreddit, setReactSubreddit]}
        about={[about, setAbout]}
        search={[search, setSearch]}
        searchResults={[searchResults, setSearchResults]}
        emptySearch={[emptySearch, setEmptySearch]}
      />
    </Provider>
  );
}

export default App;
