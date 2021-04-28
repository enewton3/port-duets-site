import React from "react";
import {
  // CometChatConversationListWithMessages,
  CometChatUserListWithMessages,
} from "../CometChatWorkspace/src";
import CometChatWrapper from "./CometChatWrapper";

export default function GuestChat({ currentGuest }) {
  return (
    <CometChatWrapper currentGuest={currentGuest}>
      {/* <CometChatConversationListWithMessages /> */}
      <CometChatUserListWithMessages />
    </CometChatWrapper>
  );
}
