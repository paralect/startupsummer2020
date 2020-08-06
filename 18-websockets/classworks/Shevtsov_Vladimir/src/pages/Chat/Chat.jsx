import React, { useCallback, useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { debounce } from 'lodash';

import Message from './components/Message';

import './Chat.css';

const socketUrl = 'http://localhost:2003';
const client = io(socketUrl);

const TYPING_MAX_RATE = 2000;

function Chat() {
  const socket = useRef(client).current;
  const [status, setStatus] = useState('Disconnected');
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('anon');
  const [room, setRoom] = useState('general');
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState([]);

  const addMessage = useCallback((msg) => {
    setMessages([...messages, msg]);
  }, [messages, setMessages]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (msg) => {
        addMessage(msg);
      });

      socket.on('typing', (data) => {
        setTyping((prev) => [...prev, data]);
      });

      setStatus(socket.status);
    }
  }, [addMessage, setTyping, setStatus, socket]);

  const sendMessage = useCallback((event) => {
    event.preventDefault();
    setInputValue('');
    socket.emit('message', { payload: inputValue });
  }, [inputValue, setInputValue, socket]);

  const changeUsername = useCallback((event) => {
    event.preventDefault();
    socket.emit('set_username', { payload: username });
  }, [username, socket]);

  const changeRoom = useCallback((event) => {
    event.preventDefault();
    socket.emit('set_room', { payload: room });
  }, [room, socket]);

  const sendTyping = useCallback(
    debounce(() => socket.emit('typing'), TYPING_MAX_RATE, { leading: true }),
    [socket],
  );

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    sendTyping();
  }, [setInputValue, sendTyping]);


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
        <div className="changeRoom">
          <form onSubmit={changeRoom}>
            <input id="username" type="text" onChange={(e) => setRoom(e.target.value)} value={room} />
            <button id="send_username" type="submit">Change room</button>
          </form>
        </div>
      </section>

      <section>
        Typing:
        {typing.map((u) => <span key={u.username}>{`${u.username} `}</span>)}
      </section>

      <section id="chatroom">
        {messages.map((msg) => <Message username={msg.user.username} message={msg.message} />)}
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
