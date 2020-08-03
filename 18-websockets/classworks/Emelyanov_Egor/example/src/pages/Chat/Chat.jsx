import React, { useCallback, useEffect, useState }  from 'react';
import io from 'socket.io-client';
import './Chat.css';
import Message from './components/Message';

const socketUrl = 'http://localhost:3001/';

const socket = io(socketUrl);


function Chat() {
  const [inputValue, setInputValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [messagesArr, setMessagesArr] = useState([]);
  const [typingArr, setTypingArr] = useState([]);

  const onTyping = useCallback((username) => {
    if (typingArr.findIndex((el) => el.username === username) === -1) {
      const id = setTimeout(() => {
        setTypingArr(typingArr.filter((el) => el !== username))
      }, 3000);
      setTypingArr([...typingArr, { username, id }]);
    } else {
      const index = typingArr.findIndex((el) => el.username === username);
      const oldId = typingArr[index].id;
      clearTimeout(oldId);
      typingArr.splice(index, 1);
      const id = setTimeout(() => {
        setTypingArr(typingArr.filter((el) => el !== username))
      }, 3000);
      setTypingArr([...typingArr, { username, id }]);
    }
  }, [typingArr]);

  const onNewMessage = useCallback((messageData) => {
    setMessagesArr(msgArr => [...msgArr, messageData]);
  }, [messagesArr]);

  useEffect(() => {
    socket.on('message', onNewMessage);
    socket.on('typing', onTyping);
    return () => {
      socket.removeListener('typing', onTyping);
      socket.removeListener('message', onNewMessage);
    };
  }, [onTyping, onNewMessage]);

  const sendMessage = useCallback(() => {
    socket.emit('message', inputValue);
  }, [inputValue]);

  const sendUsername = useCallback(() => {
    socket.emit('change_username', usernameValue);
    // setCurrentUser(usernameValue);
  }, [usernameValue]);

  const typing = useCallback(() => {
    socket.emit('typing');
  }, []);

  const inputHandler = (value) => {
    setInputValue(value);
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
            onChange={(e) => setUsernameValue(e.target.value)}
            value={usernameValue}
          />
          <button onClick={() => sendUsername()} id="send_username" type="button">Change username</button>
        </div>
      </section>

      <section id="chatroom">
        {messagesArr.map(({ username, message }) => {
          return (
            <Message username={username} message={message} />
          )
        })}
        {typingArr.map(({ username }) => {
          return (
          <p>{`${username} typing...`}</p>
          )
        })}
        <section id="feedback"></section>
      </section>


      <section id="input_zone">
        <input
          id="message"
          className="vertical-align"
          type="text"
          onChange={(e) => inputHandler(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => sendMessage()} id="send_message" className="vertical-align" type="button">Send</button>
      </section>
    </div>
  );
}

export default Chat;
