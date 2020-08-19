import React from 'react';
import { Provider } from 'react-redux';
import Pages from 'pages';
import store from 'resources/store';

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
