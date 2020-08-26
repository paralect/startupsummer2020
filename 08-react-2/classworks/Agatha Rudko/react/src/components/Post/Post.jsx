import React from "react";
import './Post.css';
import moment from "moment";

const Post = ({postId, postName, postText, username, creationTime, image}) =>{
  return (<div className={'post'} key={postId}>
    <p className={'post-info'}>Created by u/{username} { moment.unix(creationTime).startOf('day').fromNow()}</p>
    <h2 className={'post-name'}>{postName}</h2>
    <p className={'post-text'}>{postText}</p>
  </div>)
}
export {Post};