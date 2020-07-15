import React from 'react';
import './list.css';
import Item from 'components/Item';

const List = (props) => {
  console.log(props);
  if(!props.searchEl.length) {
    return (
      <div> no res</div>
    )
  }
  if(props.inputValue.length) {
    return (
      <div className="List">
        {props.searchEl.map(item => (
            <Item item={item}/>
          )
        )}
      </div>
    )
  }
  else {
    return (
      <div className="List">
        {props.data.map(item => (
            <Item item={item}/>
          )
        )}
      </div>
    )
  }
}
export default List;