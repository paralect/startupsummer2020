import React from 'react';

import Pages from 'pages';
import Search from 'components/SearchInput/Search';

function App() {
  return (
    <div>
      <header>
        <img src='/reddit-logo.svg' alt='Reddit' />
        <Search />
      </header>
      <main>
        <section>
          <div className="strip"></div>
        </section>
        <section>
          <Pages />
        </section>
      </main>
    </div>
  );
}

export default App;
