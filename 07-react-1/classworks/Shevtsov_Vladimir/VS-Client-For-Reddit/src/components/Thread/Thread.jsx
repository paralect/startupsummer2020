import React from 'react';

import './thread.css';


export default (props) => {
  const { data } = props;

  return (
    <section className="thread" key={data.id}>
      <h2 className="thread-title">{data.title}</h2>
      <p className="thread-text">{data.selftext}</p>
    </section>
  );
}