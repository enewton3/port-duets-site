// import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import {
  Chat,
  MessageList,
  MessageInput,
  // ChannelList,
  // MemberList,
  // useChannels,
} from "@pubnub/react-chat-components";
// import { useState } from "react";
import { welcomeMsgs } from "../../services/chatconfig";
// import ClientChatWidget from "../ClientChatWidget";

export default function GuestChat({ username }) {
  const currentChannel = `${username.split(" ")[1]}-Support`;

  return (
    <>
      {`Hello ${username}`}
      <Chat currentChannel={currentChannel}>
        <MessageList welcomeMessages={welcomeMsgs} />
        <MessageInput />
      </Chat>
    </>
  );
}
