import React from 'react';
import s from './Subreddit.module.css';
import moment from "moment";

const Subreddit = ({keyId, title, selftext, time, author}) => {
  time = time + "000";
  return (
      <div key={keyId} className={s.subreddit}>
        <div className={s.subreddit__header}>
          <p>Posted by {author} {moment(new Date(Number(time)), "YYYYMMDD").fromNow()} ago</p>
        </div>
        <h2>{title}</h2>
        <p>{selftext || "no description"}</p>
      </div>
  );
};

export default Subreddit;