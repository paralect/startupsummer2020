import React from 'react';
import './Communities.css';
import CommunitiesList from 'components/CommunitiesList/CommunitiesList';

class Communities extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className='communities'>
        <h1>Communities and users</h1>
        <CommunitiesList data={this.props.data} searchValue={this.props.searchValue} getPosts={this.props.getPosts} />
      </div>
    );
  }
}

export default Communities;
