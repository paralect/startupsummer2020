import React, { useState } from "react";
import { Provider } from "react-redux";

import Header from "components/HeaderComponent";
import Block from "components/Block";
import store from "./store";

import Pages from "pages";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Block />
      <main>
        <Pages />
      </main>
    </Provider>
  );
};

export default App;
