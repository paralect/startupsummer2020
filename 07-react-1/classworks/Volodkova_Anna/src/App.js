import React from 'react';
import Header from 'components/header'
import Pages from 'pages';
import List from "./components/list";

class App extends React.Component {
  state = {
    searchValue: null,
    isClicked: false,
  }

  handleOnChangeInput = (event) => {
    // console.log('Event', event);
    // console.log('State', this.state.searchValue)
    this.setState({
      searchValue: event.target.value,
    })
  }

  handlebBtnClick = (event) => {
    this.props.searchValue && this.setState({
      isClicked: true,
    })
  }

  render() {
    return (
      <main>
        <header>
          <Header handleOnChangeInput={this.handleOnChangeInput} handlebBtnClick={this.handlebBtnClick}/>
        </header>
        <section>
          <Pages searchValue={this.state.searchValue} isClicked={this.state.isClicked}/>
        </section>
      </main>
    );
  }
}

export default App;
