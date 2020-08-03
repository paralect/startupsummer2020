import React,  { useState, useEffect } from 'react';
import './Chat.css';
import Message from './components/Message';
import socketIOClient from "socket.io-client";
const socket = socketIOClient.connect("http://localhost:3001", {transports:['websockets']});


function Chat() {

  const [message, setMessage] = useState("");
  
  const clients = {};

  // useEffect(() => {
  //   socket.emit("FromAPI", data => {
  //     setMessage(data);
  //   });
  // }, []);


  const writeMes = (e) => {
    setMessage(e.target.value);
  }

  const sendMes = () => {
    console.log(message);
    socket.emit("SendMes", message);
  }

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
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <Message username="Ivan" message="Help me" />
        <section id="feedback"></section>
      </section>


      <section id="input_zone">
        <input id="message" className="vertical-align" type="text" onChange={writeMes}/>
        <button id="send_message" className="vertical-align" type="button" onClick={sendMes}>Send</button>
      </section>
    </div>
  );
}

export default Chat;
