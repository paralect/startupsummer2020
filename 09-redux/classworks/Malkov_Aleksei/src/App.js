import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Pages from 'pages';
import store from 'resources/store';

function App() {
  const [reactSubreddit, setReactSubreddit] = useState([]);
  const [about, setAbout] = useState(null);
  const [search, setSearch] = useState('');

  return (
    <Provider store={store}>
      <Pages
        reactSubreddit={[reactSubreddit, setReactSubreddit]}
        about={[about, setAbout]}
        search={[search, setSearch]}
      />
    </Provider>
  );
}

export default App;
