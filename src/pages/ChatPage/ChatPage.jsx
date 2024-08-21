import React, { useState } from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ChatList from "../../components/ChatList/ChatList";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import "./chatPage.css";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <>
      <Topbar />
      <div className="chatPageContainer">
        <Sidebar />
        <ChatList setSelectedChat={setSelectedChat} />
        {selectedChat && <ChatWindow chat={selectedChat} />}
      </div>
    </>
  );
}
