import React, { useEffect, useState, useRef } from 'react';
import './Chat.css';
import Message from './components/Message';
import io from 'socket.io-client';
import debounce from './debounce';

const ENDPOINT = "http://localhost:3001";
const socket = io(ENDPOINT, {transports: ['websocket']});
socket.connect();

function Chat() {
  const defaultName = 'Chel';
  const [message, setMessage] = useState('');
  const [listOfMessages, setListOfMessages] = useState([]);
  const [username, setUsername] = useState(defaultName);
  const [typing, setTyping] = useState([]);
  const name = useRef(null);

  function changeUserName() {
    setUsername(name.current.value);
    socket.emit("change name", name.current.value);
  }

  useEffect(() => {
    socket.emit("add user", defaultName);
    return () => {
      socket.disconnect();
    }
  }, []);

  socket.on('reg as user', (data) => {
    setUsername(data);
  });

  socket.on('new message', (data) => {
    setListOfMessages([...listOfMessages, data]);
  });

  socket.on('typing', (data) => {
    if (!typing.includes(data.username)) {
      setTimeout(() => {
        setTyping([...typing].filter((typer) => typer !== data.username));
      }, 2000)
      setTyping([...typing, data.username]);
    }
  });

  function type(e) {
    setMessage(e.target.value);
    const emitter = debounce(function() {
      socket.emit("typing", username);
    }, 2000, true);
    emitter();
  }

  function sendMessage(e) {
    e.preventDefault();
    setMessage('');
    setListOfMessages([...listOfMessages, { username, message }]);
    socket.emit("new message", message);
  }


  return (
    <div className="chat">
      <header>
        <h1>Super Chat</h1>
      </header>

      <section>
        <div id="change_username">
          <span>{username}</span>
          <input id="username" type="text" ref={name} />
          <button
            id="send_username"
            type="button"
            onClick={() => changeUserName()}
          >
            Change username
          </button>
        </div>
      </section>

      <section id="chatroom">
        {
          listOfMessages.map((mess) => <Message username={mess.username} message={mess.message} />)
        }
        
        <section id="feedback"></section>
      </section>

      <section className="typing_zone">
        {typing.length !== 0 && <span>{typing.join(', ')} is typing...</span>}
      </section>
      
      <section id="input_zone">
        <form className="input_zone" onSubmit={sendMessage}>
          <input id="message" className="vertical-align" type="text" value={message} onChange={type} />
          <button
            id="send_message"
            className="vertical-align"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default Chat;
