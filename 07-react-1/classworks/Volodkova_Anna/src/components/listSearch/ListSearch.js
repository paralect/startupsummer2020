import React from 'react';

import './listSearch.css';
import ListSearchItem from "../listSearchItem";

let i = 0;

class ListSearch extends React.Component {
  render() {
    return (
      <div>
        <div className="list">
          {
            this.props.arrData.map(li => {
              return <ListSearchItem li={li} key={li.data.id} handleClick={this.props.handleClick} handle={this.props.handle}/>
            })
          }
        </div>
      </div>
    );
  }

}

export default ListSearch;