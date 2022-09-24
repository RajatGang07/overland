import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
const [chats, setChats] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const {data} = await axios.get("/api/chat");
    setChats(data);
    console.log("data", data);
  };
  return <div>{chats.map((item) => {
    return (
        <div key={item.id}>
            {item.chatName}
            </div>
    )
  })}</div>;
};

export default ChatPage;
