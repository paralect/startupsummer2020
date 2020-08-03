import React, { useEffect, useState } from 'react';
import Message from './components/Message';
import './Chat.css';

import socket from '../../socket.connection';

function Chat() {
  const [userName, setUserName] = useState("noname");
  const [messageValue, setMessageValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageWriter, setMessageWriter] = useState('');

  useEffect(() => {
    let id;

    socket.on("new-message-received", data => {
      setMessages([...data])
    })

    socket.on("new-message-typing-stop", data => {
      setMessageWriter(data.userName)
      if(id) {
        clearTimeout(id)
      }
      id = setTimeout(() => {
        setMessageWriter('')
      }, 3000);
    })
  }, []);

  const sendMessage = () => {
    setMessageValue('')
    socket.emit('new-message', { userName, messageValue })
  }

  const onMessageChange = (e) => {
    socket.emit('new-message-typing', { userName });
    setMessageValue(e.target.value)
  }

  const onSetUserName = () => {if(!userName) setUserName('noname')}


  return (
    <div className="chat">
      <header>
        <h1>Super Chat</h1>
      </header>

      <section>
        <div id="change_username">
          <input id="username" type="text" onChange={(e) => setUserName(e.target.value)}  value={userName}/>
          <button id="send_username" type="button" onClick={onSetUserName}>Change username</button>
          {
            messageWriter && <div>{messageWriter} typing</div>
          }
        </div>
      </section>

      <section id="chatroom">
        {
          messages.map((message, i) => <Message key={i+message.userName} username={message.userName} message={message.messageValue} />)
        }

        {/*<section id="feedback"></section>*/}
      </section>


      <section id="input_zone">
        <input id="message" className="vertical-align" type="text" value={messageValue} onChange={onMessageChange}/>
        <button id="send_message" className="vertical-align" type="button" onClick={sendMessage}>Send</button>
      </section>
    </div>
  );
}

export default Chat;
