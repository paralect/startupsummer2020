import React, {useState, useEffect} from 'react';
import './Chat.css';
import Message from './components/Message';
import { socket } from "../../socket";

function Chat() {
  let input = '';
  const [response, setResponse] = useState([{name: 'lol', value: 'kek'}]);
  useEffect(()=>{
    socket.connect();
  }, [])
  socket.on("render_message", data => {
    setResponse(data);
  });
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
        {response.map((item)=>{return( <Message username={item.name} message={item.value} />)})}
        <section id="feedback"></section>
      </section>


      <form id="input_zone" onSubmit={(e)=>{
        socket.emit("send_message", { value: input });
      } }>
        <input id="message" className="vertical-align" type="text" onChange={(e) => {input = e.target.value}}/>
        <button id="send_message" className="vertical-align" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
