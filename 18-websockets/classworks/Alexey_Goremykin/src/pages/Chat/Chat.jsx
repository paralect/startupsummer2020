import React, { useState, useCallback, useEffect } from 'react';
import './Chat.css';
import Message from './components/Message';
import io from 'socket.io-client';
import debounce from 'debounce';

const socket = io('http://localhost:3001/');

function Chat() {
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingMessage, setTypingMessage] = useState([]);

  const onTyping = (userName) => {
    const id = setTimeout(() => {
      setTypingMessage(typingMessage.filter((user) => user.userName !== userName));
    }, 5000);

    const index = typingMessage.findIndex((user) => user.userName === userName);
    if (index === -1) {
      setTypingMessage([...typingMessage, { userName, id }]);
    } else {
      clearTimeout(typingMessage[index].id);
      setTypingMessage([...typingMessage.filter((user) => user.userName !== userName), { userName, id }]);
    }
  }

  const onMessage = useCallback(message => setMessages(messages => [...messages, message]), [messages]);

  useEffect(() => {
    socket.on('send-message', onMessage);
    socket.on('typing-message', onTyping);
    return () => {
      socket.removeListener('typing-message', onTyping);
      socket.removeListener('send-message', onMessage);
    };
  }, [onTyping, onMessage]);

  const sendMessage = useCallback(() => socket.emit('send-message', message), [message]);

  const sendUserName = useCallback(() => socket.emit('change-userName', userName), [userName]);

  const typing = useCallback(debounce(() => socket.emit('typing-message'), []));

  const inputHandler = value => {
    setMessage(value);
    typing();
  }

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
            onChange={e => setUserName(e.target.value)}
            value={userName}
          />
          <button onClick={() => sendUserName()} id="send_username" type="button">Change username</button>
        </div>
      </section>
      <section id="chatroom">
        {messages.map(({ userName, message }) => <Message username={userName} message={message} /> )}
        {typingMessage.map(({ userName }) => <p> {`${userName} typing...`} </p> )}
        <section id="feedback"></section>
      </section>
      <section id="input_zone">
        <input
          id="message"
          className="vertical-align"
          type="text"
          onChange={e => inputHandler(e.target.value)}
          value={message}
        />
        <button onClick={() => sendMessage()} id="send_message" className="vertical-align" type="button">Send</button>
      </section>
    </div>
  );
}

export default Chat;
