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
      console.log(message);
      console.log(messages);
      setMessages([...messages, message]);
      console.log(messages);
    },
    [messages]
  );

  const onTyping = useCallback(
    debounce(
      (user) => {
        clearTimeout(user.interval);
        if (!typingUsers.includes(user.userName)) {
          setTypingUsers([...typingUsers, user.userName]);
        }
        user.interval = setTimeout(() => {
          setTypingUsers(
            typingUsers.filter((typingUser) => typingUser !== user.userName)
          );
        }, 3000);
        console.log(typingUsers);
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
            <div>{user + ' is typing'}</div>
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
