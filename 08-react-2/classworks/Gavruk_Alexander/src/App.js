import React, { useState } from 'react';

import Pages from 'pages';
import Search from 'components/SearchInput/Search';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [isPostsData, setIsPostsData] = useState(true);
  const [communityTitleData, setCommunityTitleData] = useState({
    img: '',
    title: 'The React Library',
    communityUrl: 'r/react'
  });

  const updateCommunityTitleData = (data) => {
    setCommunityTitleData(data);
  }

  const searchHandler = (value) => {
    setSearchValue(value);
    setIsPostsData(false);
  }

  const updateIsPostsData = (data) => {
    setIsPostsData(data.data.hasOwnProperty('facets'));
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
          <Pages searchValue={searchValue} communityTitleData={communityTitleData} updateCommunityTitleData={updateCommunityTitleData} updateIsPostsData={updateIsPostsData} isPostsData={isPostsData} />
        </section>
      </main>
    </div>
  );
}

export default App;
