import React from 'react';
import './list.css';
import Item from 'components/Item';

const List = (props) => {
  console.log(props.data);
  return (
    <div className="List">
      {props.data.map(item => (
          <Item item={item}/>
        )
      )}
    </div>
  )
}
export default List;