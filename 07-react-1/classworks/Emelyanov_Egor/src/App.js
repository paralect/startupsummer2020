import React, { Component } from 'react';
import Pages from 'pages';
import Header from 'pages/header';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  inputChangeHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <main>
        <Header
          inputChangeHandler={this.inputChangeHandler}
          inputValue={this.state.inputValue}
        />
        <section>
          <Pages inputValue={this.state.inputValue} />
        </section>
      </main>
    );
  }
}

export default App;
