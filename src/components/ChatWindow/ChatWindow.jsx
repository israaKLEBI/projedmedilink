import React, { useState } from 'react';
import './chatWindow.css';

export default function ChatWindow({ chat }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: Date.now(), text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chatWindow">
      <div className="chatWindowHeader">
        <img src="/assets/persons/1.jpg" alt="Profile" className="chatWindowHeaderImg" />
        <span className="chatWindowHeaderName">{chat.name}</span>
      </div>
      <div className="chatWindowMessages">
        {messages.map(message => (
          <div key={message.id} className="chatWindowMessage">
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chatWindowInput">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
