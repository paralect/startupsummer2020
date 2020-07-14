import React from 'react';
import Pages from 'pages';
import logo from './images/reddit_logo.svg';
import search from './images/search_icon.svg';
import 'index.css';

class App extends React.Component {
  state = {
    phrase: null
  }

  findSubreddit = (event) => {
    if (event.keyCode == 13) {
      console.log(event.target.value);
      this.setState({ phrase: event.target.value});
    }
  }

render() {
  return (
    <main>
      <header className='header'>
        <div className='header_top'>
          <img src={logo}></img>
          <div className="searchField">
            <img className="searchSvg" src={search} />
            <input className="input" placeholder='Search' onKeyDown={this.findSubreddit} />
          </div>
        </div>
        <div className='header_bot'></div>
      </header>
      <section>
        <Pages phrase={this.state.phrase}/>
      </section>
    </main>
  );
};
}

export default App;
