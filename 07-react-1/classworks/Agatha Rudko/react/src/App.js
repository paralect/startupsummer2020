import React from 'react';

import Pages from 'pages';
import {Header} from "./components/Header/Header";

function App() {
  return (
    <main>
      <Header/>
      <section>
        <Pages />
      </section>
    </main>
  );
}

export default App;
