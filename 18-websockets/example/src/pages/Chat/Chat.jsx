import React from 'react';
import './Chat.css';
import Message from './components/Message';

function Chat() {
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
        <input id="message" className="vertical-align" type="text"/>
        <button id="send_message" className="vertical-align" type="button">Send</button>
      </section>
    </div>
  );
}

export default Chat;
