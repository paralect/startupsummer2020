import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import Message from './components/Message';
import './Chat.css';

function Chat(props) {
  const socket = props.socket;
  const [value, setValue] = useState('');
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  const setTypingUsersNames = (name) => {
    const timerId = setTimeout(() => {
      setTypingUsers(typingUsers.filter((typingUser) => typingUser.name !== name));
    }, 5000);

    const index = typingUsers.findIndex((typingUser) => typingUser.name === name);
    if (index === -1) {
      setTypingUsers([...typingUsers, { name, timerId }]);
    } else {
      clearTimeout(typingUsers[index].timerId);
      setTypingUsers([...typingUsers.filter((typingUser) => typingUser.name !== name), { name, timerId }]);
    }
  }

  useEffect(() => {
    socket.on('get-message', data => {
      setMessages([...messages, data]);
    });
    socket.on('typing', setTypingUsersNames);
  }, [messages, typingUsers]);

  const sendMessage = () => {
    if(value) {
      socket.emit('send-message', value);
    }
  }

  const sendUserName = () => {
    socket.emit('send-name', userName);
  }

  const typingHandler = debounce (
    () => {
      socket.emit('typing', userName);
    }
  );

  return (
    <div className="chat">
      <header>
        <h1>Super Chat</h1>
      </header>

      <section>
        <div id="change_username">
          <input
            id="username"
            type="text"
            value={userName}
            onChange={event => setUserName(event.target.value)}
          />
          <button
            id="send_username"
            type="button"
            onClick={sendUserName}
          >
            Change username
          </button>
        </div>
      </section>

      <section id="chatroom">
        {
          messages && messages.map( m => ( <Message username={m.username} message={m.value} />) )
        }
      </section>
      <section id="feedback">
        {typingUsers.map((user) => (
          <div>{user.name + ' is typing'}</div>
        ))}
      </section>
      <section id="input_zone">
        <input
          id="message"
          className="vertical-align"
          type="text"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            typingHandler();
          }}
        />
        <button
          id="send_message"
          className="vertical-align"
          type="button"
          onClick={sendMessage}
        >
          Send
        </button>
      </section>
    </div>
  );
}

export default Chat;
