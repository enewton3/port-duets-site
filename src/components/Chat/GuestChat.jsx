import React from "react";
import {
  // CometChatConversationListWithMessages,
  CometChatMessages,
  // CometChatUserListWithMessages,
} from "../CometChatWorkspace/src";
import CometChatWrapper from "./CometChatWrapper";

export default function GuestChat({ currentGuest }) {
  return (
    <CometChatWrapper currentGuest={currentGuest}>
      {/* <CometChatConversationListWithMessages chatWithUser="evynnewton" /> */}
      {/* <CometChatUserListWithMessages /> */}
      <CometChatMessages chatWithUser="evynnewton" />
    </CometChatWrapper>
  );
}
