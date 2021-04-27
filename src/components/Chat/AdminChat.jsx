import React from "react";
import {
  Chat,
  MessageList,
  MessageInput,
  ChannelList,
  // MemberList,
  useChannels,
} from "@pubnub/react-chat-components";
import { welcomeMsgs } from "../../services/chatconfig";
import { useEffect } from "react";

export default function AdminChat({ username }) {
  const [channels, fetchPage, total, error] = useChannels();
  useEffect(() => {
    const getPage = async () => {
      const resp = await fetchPage();
      console.log("resp", resp);
    };
    getPage();
  }, []);
  console.log(channels);
  return (
    <>
      {`Hello ${username}`}
      <Chat>
        <ChannelList channels={channels} />
        <MessageList welcomeMessages={welcomeMsgs} />
        <MessageInput />
      </Chat>
    </>
  );
}
