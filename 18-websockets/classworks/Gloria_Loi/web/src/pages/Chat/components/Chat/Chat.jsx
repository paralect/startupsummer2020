import React, { useEffect, useState, useCallback } from 'react';
import openSocket from 'socket.io-client';
import { debounce } from 'lodash';

import Message from '../Message';

import './Chat.css';

const socket = openSocket('http://localhost:8000');

const Chat = () => {
  const [nameInputValue, setNameInputValue] = useState('anonym');
  const [messageInputValue, setMessageInputValue] = useState('');
  const [userName, setUserName] = useState('anonym');
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  const handleNameChange = (value) => {
    setUserName(value);
  };

  const sendMessage = (value) => {
    socket.emit('new_message', { value, userName });
  };

  const handleTyping = () => {
    socket.emit('typing', { userName });
  };

  const onMessage = useCallback(
    (message) => {
      setMessages([...messages, message]);
    },
    [messages]
  );

  const onTyping = useCallback(
    debounce(
      (user) => {
        const timer = setTimeout(() => {
          setTypingUsers(
            typingUsers.filter((typingUser) => typingUser.userName !== user.userName)
          );
        }, 3000);
        const index = typingUsers.findIndex((typingUser) => typingUser.userName === user.userName);
        if (index === -1) {
          setTypingUsers([...typingUsers, { userName, timer }]);
        } else {
          clearTimeout(typingUsers[index].timer );
          setTypingUsers([...typingUsers.filter((typingUser) => typingUser.userName !== user.userName), { userName, timer }]);
        }
      },
      [typingUsers],
      2000,
      { leading: true }
    )
  );

  useEffect(() => {
    socket.emit('connect');
    socket.on('message', onMessage);
    socket.on('typing', onTyping);
  }, [onMessage, onTyping]);

  return (
    <div className="chat">
      <header>
        <h1>Super Chat</h1>
      </header>

      <section>
        <div id="change_username">
          <input
            id="username"
            value={nameInputValue}
            onChange={(event) => {
              setNameInputValue(event.target.value);
            }}
            type="text"
          />
          <button
            id="send_username"
            onClick={() => {
              handleNameChange(nameInputValue);
            }}
            type="button"
          >
            Change username
          </button>
        </div>
      </section>

      <section id="chatroom">
        {messages.map((message) => (
          <Message username={message.userName} message={message.value} />
        ))}
        <section id="feedback">
          {typingUsers.map((user) => (
            <div>{user.userName + ' is typing'}</div>
          ))}
        </section>
      </section>

      <section id="input_zone">
        <input
          id="message"
          value={messageInputValue}
          className="vertical-align"
          onChange={(event) => {
            setMessageInputValue(event.target.value);
            handleTyping();
          }}
          type="text"
        />
        <button
          id="send_message"
          className="vertical-align"
          onClick={() => {
            sendMessage(messageInputValue);
            setMessageInputValue('');
          }}
          type="button"
        >
          Send
        </button>
      </section>
    </div>
  );
};

export default Chat;
