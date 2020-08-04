import React, { useState } from 'react';
import './Chat.css';
import Message from './components/Message';
import io from 'socket.io-client';
const socket = io('http://localhost:3001/', {transports: ['websocket']});

socket.on('connection', () => {
  console.log(socket.connected);
});

function Chat() {

  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [typingMessage, setTypingMessage] = useState('')

  const sendMessage = () => {
    socket.emit('send-message', {userName, message});
    socket.on('new-message', ([...newMessages]) => {
      setMessages(newMessages);
    })
  }

  const messageValue = (e) => {
    setMessage(e.target.value)
    socket.emit('typing-message', userName);
    socket.on('typing-messasge-name', (message) => {
      setTypingMessage(message);
    })
  }

  const renameUser = () => {
      setUserName(userName);
  }

  const userNameValue = (e) => {
    setUserName(e.target.value)
  }

  return (
    <div className="chat">
      <header>
        <h1>Super Chat</h1>
      </header>

      <section>
        <div id="change_username">
          <input onChange={(e) => {userNameValue(e)}} id="username" type="text"/>
          <button onClick={renameUser} id="send_username"  type="button">Change username</button>
        </div>
      </section>

      <section id="chatroom">
        {messages.map(message => <Message username={message.userName || 'Anonimus'} message={message.message} />)}
        <section id="feedback"></section>
        <p>{typingMessage}</p>
      </section>

      <section id="input_zone">
        <input onChange={(e) => messageValue(e)} id="message" className="vertical-align" type="text"/>
        <button onClick={sendMessage} id="send_message" className="vertical-align" type="button">Send</button>
      </section>
    </div>
  );
}

export default Chat;
