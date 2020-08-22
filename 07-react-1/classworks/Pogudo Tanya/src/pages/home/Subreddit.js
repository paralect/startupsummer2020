import React from 'react';
import './style.css';
import moment from "moment";
import comment from './img/comment.svg'

export class Subreddit extends React.Component {  
    render() {
    return (
<div>    
    <div className= "block">
    <p className='create_info'>Created by {this.props.post.author} { moment.unix(this.props.post.created_utc).startOf('day').fromNow()}</p>
            <h1 className="title_sub">{this.props.post.title}</h1>
            <h1 className="url">{this.props.post.selftext? this.props.post.selftext :this.props.post.url}</h1>
            <div className="Score_Comment">
            <img src={comment}/>
            <h1 className="score">{this.props.post.score} Comments</h1>
            </div>
        </div>       
</div>
    )
    }
  }
    