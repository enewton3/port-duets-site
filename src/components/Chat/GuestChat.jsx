// import { useState } from "react";
// import { welcomeMsgs } from "../../services/chatconfig";
// import ClientChatWidget from "../ClientChatWidget";

export default function GuestChat({ username }) {
  // const currentChannel = `${username.split(" ")[1]}-Support`;

  return (
    <>
      {`Hello ${username}`}
      {/* <Chat
        currentChannel={currentChannel}
        onError={(error) => {
          console.log(error);
        }}
        onPresence={(e) => {
          console.log(e);
        }}
      >
        <MessageList welcomeMessages={welcomeMsgs} />
        <MessageInput />
      </Chat> */}
    </>
  );
}
