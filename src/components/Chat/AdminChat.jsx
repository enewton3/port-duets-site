import React, { useEffect } from "react";
import {
  appSetting,
  createChatUser,
  getChatUser,
  loginChat,
  // pubnub,
  // welcomeMsgs,
} from "../../services/chatconfig";
// import // FormControl,
// InputLabel,
// makeStyles,
// MenuItem,
// Select,
// "@material-ui/core";
// import { PubNubConsumer } from "pubnub-react";
// import Messages from "./Messages";
import {
  // CometChatConversationList,
  CometChatConversationListWithMessages,
  // CometChatUI,
  // CometChatUserListWithMessages,
} from "../CometChatWorkspace/src";

// const useStyles = makeStyles(() => ({
//   channelList: {
//     width: "30%",
//   },
//   select: {
//     width: "50%",
//   },
// }));

export default function AdminChat({ username, guests }) {
  // const classes = useStyles();
  // const [client, setClient] = useState();
  // const [chatUser, setChatUser] = useState();

  useEffect(() => {
    appSetting();
    if (getChatUser(username)) {
      loginChat(username);
      // setChatUser(resp);
    } else {
      createChatUser(username);
      loginChat(username);
      // setChatUser(resp);
    }

    // setClient(resp);
  }, [username]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CometChatConversationListWithMessages />
    </div>
  );
}
