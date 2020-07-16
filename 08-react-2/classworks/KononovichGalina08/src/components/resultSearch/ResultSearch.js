import React from 'react';
import './ResultSearch.css';
import Item from 'components/resultSearch';

const ResultSearch = (props) => {
  console.log(props.subredditData);
  return (
    <div className="item">
      <div className="titleResult">{props.subredditData[0].data.display_name_prefixed}</div>
    </div>
  )
}
export default ResultSearch;