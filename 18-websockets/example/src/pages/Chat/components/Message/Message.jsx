import React from 'react';
import './Message.css';

function Message(props) {
  return (
    <p className='message'>{props.username}: {props.message}</p>
  );
}

export default Message;
