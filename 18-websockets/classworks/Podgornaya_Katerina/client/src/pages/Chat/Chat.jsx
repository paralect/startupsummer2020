import React, { useState } from 'react';
import io from 'socket.io-client';

import './Chat.css';
import Message from './components/Message';

function Chat() {
  const io = require("socket.io-client");
  const ioClient = io.connect("http://localhost:3030");

  const sendMessage = () => {
    ioClient.emit('send-message');
  }

  const [message, setMessage] = useState(null);

  return (
    <div className="chat">
      <header>
        <h1>Super Chat</h1>
      </header>

      <section>
        <div id="change_username">
          <input id="username" type="text"/>
          <button id="send_username" type="button">Change username</button>
        </div>
      </section>

      <section id="chatroom">
        <Message username="Ivan" message="Help me" />
        <section id="feedback"></section>
      </section>
      
      <section id="input_zone">
        <input 
          id="message" 
          className="vertical-align" 
          type="text"
        />
        <button 
          id="send_message" 
          className="vertical-align" 
          type="button"
          onClick={() => sendMessage()}
        >Send</button>
      </section>
    </div>
  );
}

export default Chat;
