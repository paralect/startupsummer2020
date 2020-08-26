import React, { useState } from 'react';

import Pages from 'pages';

function App() {
  const [reactSubreddit, setReactSubreddit] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [about, setAbout] = useState(null);
  const [search, setSearch] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);

  return (
    <Pages
      reactSubreddit={[reactSubreddit, setReactSubreddit]}
      about={[about, setAbout]}
      search={[search, setSearch]}
      searchResults={[searchResults, setSearchResults]}
      emptySearch={[emptySearch, setEmptySearch]}
    />
  );
}

export default App;
