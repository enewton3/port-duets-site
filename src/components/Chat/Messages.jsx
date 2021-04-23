import React from "react";

export default function Messages({ messages, currentGuest }) {
  return (
    <div>
      <ul>
        {messages.map((message, index) => {
          return (
            <li key={`message ${index}`}>
              {message.text}
              {message.guest.username}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
