import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <span>[icon]</span>
        <input type="text" value={this.state.value} onChange={() => this.handleChange()} />
      </div>
    );
  }
}