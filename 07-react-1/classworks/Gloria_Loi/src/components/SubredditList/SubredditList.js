
import React from 'react';
import Subreddit from "../Subreddit";
import "./SubrediitList.css";

class SubredditList extends React.Component {
    
    render() {
        return (
            <div className="subreddits-container">
                  {this.props.data.map(child => (
            <Subreddit key={child.data.id} body={child}/>))}
            </div>
          );
  }}
  
  export default SubredditList;