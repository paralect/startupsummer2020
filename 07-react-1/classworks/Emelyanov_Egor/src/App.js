import React, { Component } from 'react';
import Pages from 'pages';
import Header from 'pages/header';
import './style.css';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <Pages />
        </section>
      </main>
    );
  }
}

export default App;
