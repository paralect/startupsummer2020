import React from 'react';

import icon from '../../assets/search_icon.svg';

export default class SearchBar extends React.Component {
  state = { value: '' };

  handleChange = (e) => this.setState({ value: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <div className={this.props.className}>
        <img className="search-icon" src={icon} alt="search icon"/>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input className="search-input" type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}