import React from 'react';
import ListItem from "../listItem";

import './list.css';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        {this.props.arrData.map(li => {
          return <ListItem li={li}/>
        })}
      </div>
    );
  }

}

export default List;