import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'services/history.service';
import Pages from 'pages';
import {Header} from "./components/Header/Header";
import store from 'resources/store';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
    <main>
      <Header/>
      <section>
        <Pages />
      </section>
    </main>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
