import React from "react";
import "./style.css";
import moment from "moment";
import comment from "./img/comment.svg";

export function Subreddit(props){

  return (
    <div>
      <div className="block">
        <p className="create_info">
          Created by {props.post.author}{" "}
          {moment.unix(props.post.created_utc).startOf("day").fromNow()}
        </p>
        <h1 className="title_sub">{props.post.title}</h1>
        <h1 className="url">
          {props.post.selftext ? props.post.selftext : props.post.url}
        </h1>
        <div className="Score_Comment">
          <img src={comment} />
          <h1 className="score">{props.post.score} Comments</h1>
        </div>
      </div>
    </div>
  );
}


