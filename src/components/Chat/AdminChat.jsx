import React from "react";
// import {
//   appSetting,
//   createChatUser,
//   getChatUser,
//   loginChat,
// } from "../../services/chatconfig";
// import { makeStyles } from "@material-ui/core";
import {
  // CometChatConversationListWithMessages,
  // CometChatMessages,
  CometChatUserListWithMessages,
} from "../CometChatWorkspace/src";
import CometChatWrapper from "./CometChatWrapper";

// const useStyles = makeStyles(() => ({
//   channelList: {
//     width: "30%",
//   },
//   select: {
//     width: "50%",
//   },
// }));

function AdminChat({ currentUser }) {
  //if currentUser has an chat AuthToken, log them in

  // const chatSetup = (username) => {
  //       const app = appSetting();
  //       const userExists = getChatUser(username);
  //       if (userExists) {
  //         const user = loginChat(username);
  //         console.log("logged in", user);
  //         // setChatUser(user);
  //       } else {
  //         createChatUser(username);
  //         const user = loginChat(username);
  //         // setChatUser(user);
  //         console.log("created and logged in", user);
  //       }
  //       console.log(app);
  //       // setClient(app);
  //     };

  return (
    <CometChatWrapper currentUser={currentUser}>
      <div style={{ width: "100%", height: "100%" }}>
        {/* <CometChatConversationListWithMessages /> */}
        {/* <CometChatMessages chatWithUser={"SUPERHERO1"} /> */}
        <CometChatUserListWithMessages />
      </div>
    </CometChatWrapper>
  );
}

export default AdminChat;
