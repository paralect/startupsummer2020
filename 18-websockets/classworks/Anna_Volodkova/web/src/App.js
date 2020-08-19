import React from 'react';
import './App.css';

import Chat from './pages/Chat';
import io from "socket.io-client";

function App() {
  const socket = io.connect('http://localhost:3002', { transports: ['websocket'] });

  return (
    <div className="App">
      <Chat
      socket={socket}
      />
    </div>
  );
}

export default App;
