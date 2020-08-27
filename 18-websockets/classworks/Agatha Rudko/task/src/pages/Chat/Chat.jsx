import React, {useState, useEffect} from 'react';
import './Chat.css';
import Message from './components/Message';
import { socket } from "../../socket";

function Chat(props) {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState('')
  const [messages, setMessages] = useState([]);

  socket.on('render_message', data => {
    setMessages([...messages, data]);
  });

  if(isTyping){
    socket.emit('typing', name);
  }

  socket.on('typing', name => {
    setTypingUser(name);
  })

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
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <button
            id="send_username"
            type="button"
            onClick={() => {
              if(!name) return;
              socket.emit('send_name', name);
            }}
          >
            Change username
          </button>
        </div>
      </section>

      <section id="chatroom">
        {messages.map( event => (
            <Message
              username={event.name}
              message={event.message}
            />))}
        <section id="feedback" />
      </section>
      {(typingUser) && <div>{typingUser} is typing</div>}
      <section id="input_zone">
        <input
          id="message"
          className="vertical-align"
          type="text"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            setIsTyping(true);
            setTimeout(() =>
            { setIsTyping(false);
              setTypingUser('')}, 1000)
          }}
        />
        <button
          id="send_message"
          className="vertical-align"
          type="button"
          onClick={() => {
            if(!value) return;
            socket.emit('send_message', value);
          }}
        >
          Send
        </button>
      </section>
    </div>
  );
}

export default Chat;
