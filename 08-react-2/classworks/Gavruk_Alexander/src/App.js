import React, { useState } from 'react';

import Pages from 'pages';
import Search from 'components/SearchInput/Search';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (value) => {
    setSearchValue(value);
  }
  
  const checkIsPostsData = (data) => {
    return !data.data.hasOwnProperty('facets');
  }

  return (
    <div>
      <header>
        <img src='/reddit-logo.svg' alt='Reddit' />
        <Search searchValue={searchValue} searchHandler={searchHandler} />
      </header>
      <main>
        <section>
          <div className="strip"></div>
        </section>
        <section>
          <Pages searchValue={searchValue} checkIsPostsData={checkIsPostsData} />
        </section>
      </main>
    </div>
  );
}

export default App;
