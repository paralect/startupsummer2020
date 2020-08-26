import React from 'react';
import styles from './search-bar.module.css';
import { ReactComponent as Search } from '../../assets/search.svg';
import { withRedditApi } from 'hooks/useRedditApi';


class SearchBar extends React.Component {
  state = {
    search: ''
  };

  render () {
    return (
      <form className={styles.container} onSubmit={(e) => this.props.submit(e, this.state.search)}>
        <Search className={styles.icon} />
        <input
          className={styles.input__search}
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
      </form>
    );
  }
  
}

export default withRedditApi(SearchBar);
