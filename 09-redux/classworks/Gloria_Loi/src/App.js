import React, { useState } from "react";
import {Provider} from "react-redux"

import Header from "components/HeaderComponent";
import Block from "components/Block";
import store from "./resources/store"

import Pages from "pages";

const App = () => {
  const [inputString, setInputString] = useState("");

  const handleChange = ({ target: { value: inputString } }) =>
    setInputString(inputString);

  return (
    <Provider store={store}>
      <Header handleChange={handleChange} />
      <Block />
      <main>
        <Pages inputString={inputString} />
      </main>
    </Provider>
  );
};

export default App;
