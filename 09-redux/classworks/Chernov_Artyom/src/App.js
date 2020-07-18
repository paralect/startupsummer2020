import React from "react";
import Pages from 'pages';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import store from './resourses/store'
import { Provider } from "react-redux";


function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <main>
            <section>
              <Header/>
              <Pages/>
            </section>
          </main>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
