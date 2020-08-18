import React, { useState } from 'react';

import './Chat.css';
import Message from './components/Message';

const io = require("socket.io-client");
const ioClient = io.connect("http://localhost:3031");

function Chat() {
  const [username, setUsername] = useState('Anonymous');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [typingNames, setTypingNames] = useState([]);

  let name = 'Anonymous';

  if (inputMessage) { 
    ioClient.emit('typing-message', username); 
    setTimeout(() => ioClient.emit('no-typing'), 3000);
  } 

  const sendMessage = () => {
    ioClient.emit('no-typing');
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
      setTypingNames(username);
    });
    ioClient.on('get-no-typing', () => {
      setTypingNames('');
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
            onClick={() => { name ? setUsername(name) : setUsername('Anonymous')}}
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
          typingNames.length && (
            <div className='isTyping'>
              {typingNames} is typing a message...
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
