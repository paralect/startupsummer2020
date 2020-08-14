import React from 'react';

import './listSearch.css';
import ListSearchItem from '../listSearchItem';

function ListSearch(props) {
  return (
    <div>
      <div className="list">
        {props.arrData.map(li => {
          return (
            <ListSearchItem
              li={li}
              key={li.data.id}
              handleClick={props.handleClick}
              handle={props.handle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListSearch;
