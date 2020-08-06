import React, { useState } from 'react';

import './Chat.css';
import Message from './components/Message';

const io = require("socket.io-client");
const ioClient = io.connect("http://localhost:3031");

function Chat() {
  const [username, setUsername] = useState('Anonymous');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  
  const sendMessage = () => {
    const msg = {
      message: inputMessage,
      username
    };
    setMessages((messages) => [...messages, msg]);
    ioClient.emit('send-message', msg);
  };

  React.useEffect(() => {
    ioClient.on('get-message', (msg) => {
      setMessages((messages) => [...messages, msg]);
    }
  );
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
            name='message'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button 
            id="send_username" 
            type="button"
            onClick={() => setUsername(username)}
           >
            Change username
          </button>
        </div>
      </section>

      <section id="chatroom">
        {
          messages.map((message) => (
            <Message username={message.username} message={message.message} />
          ))
        }
        <section id="feedback"></section>
      </section>
      
      <section id="input_zone">
        <input 
          id="message" 
          className="vertical-align" 
          type="text"
          onChange={(e) => setInputMessage(e.target.value)}
          value={inputMessage}
        />
        <button 
          id="send_message" 
          className="vertical-align" 
          type="button"
          onClick={sendMessage}
        >
          Send</button>
      </section>
    </div>
  );
}

export default Chat;
