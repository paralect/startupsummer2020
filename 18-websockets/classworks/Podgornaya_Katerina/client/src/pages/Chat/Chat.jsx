import React, { useState } from 'react';

import './Chat.css';
import Message from './components/Message';

const io = require("socket.io-client");
const ioClient = io.connect("http://localhost:3031");

function Chat() {
  const [username, setUsername] = useState('Anonymous');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingName, setIsTypingName] = useState('');

  let name = 'Anonymous';

  if (inputMessage) {
    ioClient.emit('typing-message', username);
  } else {
    ioClient.emit('no-typing');
  }

  const sendMessage = () => {
    const msg = {
      message: inputMessage,
      username
    };
    setMessages((messages) => [...messages, msg]);
    ioClient.emit('send-message', msg);
    setInputMessage('');
  };

  React.useEffect(() => {
    ioClient.on('get-message', (msg) => {
      setMessages((messages) => [...messages, msg]);
    }
  );
    ioClient.on('get-typing-username', (username) => {
      setIsTyping(true);
      setIsTypingName(username);
    });
    ioClient.on('get-no-typing', () => {
      setIsTyping(false);
    });
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
            onChange={(e) => name = e.target.value}
          
          />
          <button 
            id="send_username" 
            type="button"
            onClick={() => setUsername(name)}
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
        <section id="feedback">
        {
          isTyping && (
            <div className='isTyping'>
              {isTypingName} is typing a message...
            </div>
          )
        }
        </section>
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
