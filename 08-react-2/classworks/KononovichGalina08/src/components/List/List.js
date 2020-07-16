import React from 'react';
import './list.css';
import Item from 'components/Item';
import iconError from './error.svg';

const List = (props) => {
  if(!props.searchEl.length) {
    return (
      <div className="errorIcon">
        <img src={iconError}/>
      </div>    
    )
  }
  if(props.inputValue.length) {
    return (
      <div className="List">
        {props.searchEl.map(item => (
            <Item inputValue={props.inputValue} clickHandler={props.clickHandler} item={item}/>
          )
        )}
      </div>
    )
  } else {
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