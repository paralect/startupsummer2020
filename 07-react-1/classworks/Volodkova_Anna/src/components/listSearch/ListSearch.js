import React from 'react';

import './listSearch.css';
import ListSearchItem from "../listSearchItem";

class ListSearch extends React.Component {
  render() {
    return (
      <div className="list">
        {this.props.arrData.map(li => {
          return <ListSearchItem li={li}/>
        })}
      </div>
    );
  }

}

export default ListSearch;