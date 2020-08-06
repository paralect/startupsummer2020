import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { debounce } from 'lodash';

import './Chat.css';
import Message from './components/Message';
import { useCallback } from "react";

const ENDPOINT = "http://localhost:3001/";
const socket = socketIOClient(ENDPOINT);

function Chat() {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [msgInputValue, setMsgInputValue] = useState('');
  const [username, setUsername] = useState('Anonymous');
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  const onUsernameSubmit = (username) => {
    socket.emit('setUsername', username);
    setUsername(username);
    setUsernameInputValue('');
  }

  const onSendMessage = (msg) => {
    socket.emit('newMessage', { username, value: msg });
    setMsgInputValue('');
  }

  const onType = (username) => {
    const timerId = setTimeout(() => {
      setTypingUsers(typingUsers.filter((u) => u.username !== username));
    }, 7000);

    const index = typingUsers.findIndex((u) => u.username === username);
    if (index === -1) {
      setTypingUsers([...typingUsers, { username, timerId }]);
    } else {
      clearTimeout(typingUsers[index].timerId);
      setTypingUsers([...typingUsers.filter((u) => u.username !== username), { username, timerId }]);
    }
    
  }

  const onInputChange = (value) => {
    setMsgInputValue(value);
    typing();
  }

  const typing = useCallback(debounce(() => socket.emit('setTyping', username), 2000, { leading: true }));

  useEffect(() => {
    socket.on('messages', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('typing', onType);

    return () => socket.disconnect();
  }, []);

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
            value={usernameInputValue}
            onChange={(e) => setUsernameInputValue(e.target.value)}
          />
          <button
            id="send_username"
            type="button"
            onClick={() => onUsernameSubmit(usernameInputValue)}
          >
            Change username
          </button>
        </div>
      </section>

      <section id="chatroom">
        {
          messages.map((msg, index) => <Message key={index} username={msg.username} message={msg.value} />)
        }
        {typingUsers && typingUsers.map((user, index) => {
          return (
            <span key={index}>{user.username} typing...</span>
          )
        })}
        <section id="feedback"></section>
      </section>

      <section id="input_zone">
        <input
          id="message"
          className="vertical-align"
          type="text"
          value={msgInputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <button
          id="send_message"
          className="vertical-align"
          type="button"
          onClick={() => onSendMessage(msgInputValue)}
        >
          Send
        </button>
      </section>
    </div>
  );
}

export default Chat;
