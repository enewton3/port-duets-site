import { Button } from "@material-ui/core";
import React, { useState } from "react";
import {
  // CometChatConversationListWithMessages,
  CometChatMessages,
  // CometChatUserListWithMessages,
} from "../CometChatWorkspace/src";
import CometChatWrapper from "./CometChatWrapper";

export default function GuestChat({ currentGuest }) {
  const [chatting, setChatting] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {chatting ? (
        <CometChatWrapper currentGuest={currentGuest}>
          {/* <CometChatConversationListWithMessages chatWithUser="evynnewton" /> */}
          {/* <CometChatUserListWithMessages /> */}
          <CometChatMessages
            chatWithUser={"evynnewton"}
            videocall={false}
            audiocall={false}
            sidebar={false}
            viewdetail={false}
          />
        </CometChatWrapper>
      ) : (
        <div>
          <Button variant="outlined" onClick={() => setChatting(true)}>
            CLick to start chatting
          </Button>
        </div>
      )}
    </div>
  );
}
