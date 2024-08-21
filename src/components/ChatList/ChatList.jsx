import React from 'react';
import './chatList.css';

export default function ChatList({ setSelectedChat }) {
  const chats = [
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
    // Ajouter d'autres chats ici
  ];

  return (
    <div className="chatList">
      {chats.map(chat => (
        <div key={chat.id} className="chatListItem" onClick={() => setSelectedChat(chat)}>
          <img src="/assets/persons/1.jpg" alt="Profile" className="chatListItemImg" />
          <span className="chatListItemName">{chat.name}</span>
        </div>
      ))}
    </div>
  );
}
