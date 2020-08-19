import React, { useState } from "react";

import Header from "components/HeaderComponent";
import Block from "components/Block";

import Pages from "pages";

const App = () => {
  const [inputString, setInputString] = useState("");

  const handleChange = ({ target: { value: inputString } }) =>
    setInputString(inputString);

  return (
    <div>
      <Header handleChange={handleChange} />
      <Block />
      <main>
        <Pages inputString={inputString} />
      </main>
    </div>
  );
};

export default App;
