import React from 'react';

import Pages from 'pages';
import Search from 'components/SearchInput/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  searchHandler = (value) => {
    this.setState({
      searchValue: value
    });
  }

  render() {
    return (
      <div>
        <header>
          <img src='./reddit-logo.svg' alt='Reddit' />
          <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
        </header>
        <main>
          <section>
            <div className="strip"></div>
          </section>
          <section>
            <Pages searchValue={this.state.searchValue} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
