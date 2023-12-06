import "./Chatbot.css"
import React, { useState } from "react";

export const ChatBot = () => {

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(currMessage);
    let tmp = {"author": "user", "content": currMessage};
    const response = await fetch('http://localhost:5000/get_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: currMessage }),
      });
    const data = await response.json();
    let newTmp = {"author": "user", "content": data.result};
    setMessages([...messages, tmp, newTmp]);
    setCurrMessage("");
  }

  const [currMessage, setCurrMessage] = useState("");

  const defaultMessage = "Welcome! What can I help you study with today?"
  const [messages, setMessages] = useState([{"author": "chatbot", "content": defaultMessage}])
  return (
    <div className="chat-bot">
      <div className="messages">
        {messages.map(message => {
          let content = message["content"];
          return (
            <div className="chatbot-message-outer">
              <div className={`chatbot-message-inner`}> 
              
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

export default ChatBot;