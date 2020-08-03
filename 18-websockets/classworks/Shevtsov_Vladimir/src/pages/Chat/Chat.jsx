import React, { useCallback, useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import Message from './components/Message';

import './Chat.css';

const socketUrl = 'http://localhost:3002';
const client = io(socketUrl);

function Chat() {
  const socket = useRef(client).current;
  const [status, setStatus] = useState('Disconnected');
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('anon');
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState(new Set());

  const addMessage = useCallback((msg) => {
    setMessages([...messages, msg]);
  }, [messages, setMessages]);

  const addTyping = useCallback((data) => {
    setTypingUsers((typing) => new Set([...typing, data.username]));
  }, [setTypingUsers]);

  const removeTyping = useCallback((data) => {
    setTypingUsers((typing) => {
      typing.delete(data.username);
      return typing;
    });
  }, []);


  useEffect(() => {
    if (socket) {
      socket.on('message', (msg) => {
        switch (msg.type) {
          case 'message':
            addMessage(msg);
            removeTyping(msg);
            break;
          case 'typing':
            addTyping(msg);
            break;
          default:
            break;
        }
      });

      setStatus(socket.status);
    }
  }, [addMessage, setStatus, addTyping, socket, removeTyping]);

  const sendMessage = useCallback((event) => {
    event.preventDefault();
    setInputValue('');
    socket.emit('message', { type: 'message', payload: inputValue });
  }, [inputValue, setInputValue, socket]);

  const changeUsername = useCallback((event) => {
    event.preventDefault();
    socket.emit('message', { type: 'set_username', payload: username });
  }, [username, socket]);

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    socket.emit('message', { type: 'typing' });
  }, [setInputValue, socket]);


  return (
    <div className="chat">
      <header>
        <h1>Super Chat</h1>
      </header>
      <span>Status: {`${status}`}</span>

      <section>
        <div id="change_username">
          <form onSubmit={changeUsername}>
            <input id="username" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
            <button id="send_username" type="submit">Change username</button>
          </form>
        </div>
      </section>

      <section>
        Typing: 
        {[...typingUsers].map((u) => <span>{`${u} `}</span>)}
      </section>

      <section id="chatroom">
        {messages.map((msg) => <Message username={msg.username} message={msg.message} />)}
        <section id="feedback"></section>
      </section>

      <section id="input_zone">
        <form onSubmit={sendMessage}>
          <input
            id="message"
            className="vertical-align"
            type="text"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button id="send_message" className="vertical-align" type="submit">Send</button>
        </form>
      </section>

    </div>
  );
}

export default Chat;
