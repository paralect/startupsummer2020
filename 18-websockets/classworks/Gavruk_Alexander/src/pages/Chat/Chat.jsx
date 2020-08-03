import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

import './Chat.css';
import Message from './components/Message';

const ENDPOINT = "http://localhost:3001/";
const socket = socketIOClient(ENDPOINT);

function Chat() {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [msgInputValue, setMsgInputValue] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [timerId, setTimerId] = useState(null);

  const onUsernameSubmit = (username) => {
    socket.emit('set_username', username);
    setUsernameInputValue('');
  }

  const onSendMessage = (msg) => {
    socket.emit('new_message', { username, value: msg });
    setMsgInputValue('');
  }

  const onType = (username) => {
    const timerId = setTimeout(() => {
      setTypingUsers((typingUsers) => typingUsers.filter((name) => name !== username))
    }, 7000);
    setTimerId(timerId);

    setTypingUsers((prevTypings) => {
      const currentTypings = prevTypings || typingUsers;
      if (currentTypings.findIndex((name) => name === username) === -1) {
        return [...currentTypings, username];
      } else {
        return prevTypings;
      }
    })
  }

  const onInputChange = (value) => {
    setMsgInputValue(value);
    typing();
  }

  const typing = () => {
    socket.emit('set_typing', username);
  }

  useEffect(() => {
    socket.on('username', (data) => {
      setUsername(data.username);
    });

    socket.on('messages', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('typing', (username) => {
      onType(username);
    });

    return () => {
      socket.disconnect();
      clearTimeout(timerId);
    };
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
        {typingUsers && typingUsers.map((user,index) => {
          return (
            <span key={index}>{user} typing...</span>
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
