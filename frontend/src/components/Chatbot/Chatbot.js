import "./Chatbot.css"
import React, { useState } from "react";

export const ChatBot = () => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log(currMessage);
    let tmp = {"author": "user", "content": currMessage};
    setMessages([...messages, tmp]);
    setCurrMessage("");
  }

  const [currMessage, setCurrMessage] = useState("");

  const defaultMessage = "Welcome! What can I help you study with today?"
  const [messages, setMessages] = useState([{"author": "chatbot", "content": defaultMessage}])
  // testing
  return (
    <div className="chat-bot">
      <div className="messages">
        {messages.map(message => {
          let content = message["content"];
          return (
            <div className="chatbot-message-outer">
              <div className={`chatbot-message-inner ${message["author"] == "user" ? "user-class" : "chatbot-class"}`}>
                <p>{content}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="chat-input">
        <form onSubmit={handleSubmit} className="input-form">
          <input value={currMessage} onChange={(e) => setCurrMessage(e.target.value)} placeholder="Enter You Question..." className="chat-input-field" />
        </form>
      </div>
    </div>
  )
      }
      /*{ <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">Enter Your Question/upload files...</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">ChatBot</div>
          <p className="p">Welcome! What can I help you study with today?</p>
        </div>
      </div>
    </div> */

export default ChatBot;