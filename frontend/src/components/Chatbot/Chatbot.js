import "./Chatbot.css"
import React from "react";


export const ChatBot = () => {
  return (
    <div className="chat-bot">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">Enter Your Question/upload files...</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">ChatBot</div>
          <p className="p">Welcome! What can I help you study with today?</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;