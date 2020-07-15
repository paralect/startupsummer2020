import React from 'react';
import Header from 'components/header'
import Pages from 'pages';
import List from "./components/list";

class App extends React.Component {
  state = {
    searchValue: '',
    isClicked: false,
  }

  handleOnChangeInput = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleBtnClick = (event) => {
    console.log('Button clicked')
    if (this.state.searchValue){
      this.setState({
        isClicked: true,
      })
    }


  }

  render() {
    return (
      <main>
        <header>
          <Header handleOnChangeInput={this.handleOnChangeInput} handleBtnClick={this.handleBtnClick}/>
        </header>
        <section>
          <Pages searchValue={this.state.searchValue} isClicked={this.state.isClicked}/>
        </section>
      </main>
    );
  }
}

export default App;
