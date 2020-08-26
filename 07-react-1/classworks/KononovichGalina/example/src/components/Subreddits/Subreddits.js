import React from 'react';
import './subreddits.css';
import defaultIcon from './logoReact.svg';


const Subreddits = (props) => {
  const {item, getRedditData} = props;

  function selectedSubreddit() {
    getRedditData(`/${item.display_name_prefixed.toLowerCase()}`);
  }
    return (
      <div className="subredditsItem" onClick={selectedSubreddit}>
        <img src={item.icon_img?item.icon_img:defaultIcon}/>
        <div className="headerSub" >
          <h3>{item.display_name_prefixed}</h3>  
          <p>{`${item.subscribers} Members`}</p> 
        </div>
        <p className="description">{item.public_description}</p>
      </div>
    )
}

export default Subreddits;