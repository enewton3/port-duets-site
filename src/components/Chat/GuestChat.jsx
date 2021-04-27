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
import { pubnub, welcomeMsgs } from "../../services/chatconfig";

export default function GuestChat({ username }) {
  // const [client, setClient] = useState(pubnub(username));
  const client = pubnub(username);
  const currentChannel = `${username.split(" ")[1]}-Support`;
  // const theme = "dark";
  // const channels = ["support-1", "support-2"];
  // const [messages, setMessages] = useState([]);
  // console.log(channels);
  // console.log(pubnub);
  // const [channels, fetchPage, total, error] = useChannels(pubnub);
  // console.log(client);
  // console.log(currentChannel);

  return (
    <>
      {/* {`Hello ${username}`} */}
      <PubNubProvider client={client}>
        {/* <ChannelList channels={channels} /> */}
        <Chat currentChannel={currentChannel}>
          <MessageList welcomeMessages={welcomeMsgs} />
          <MessageInput />
        </Chat>
      </PubNubProvider>
    </>
  );
}
