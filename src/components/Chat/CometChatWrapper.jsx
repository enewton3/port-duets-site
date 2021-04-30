import React, { useEffect } from "react";
import {
  appSetting,
  createChatUser,
  loginChatWithAuthToken,
} from "../../services/chatconfig";

import { updateUser } from "../../services/auth";
import { updateGuest } from "../../services/guests";
// import { CometChatContextProvider } from "../CometChatWorkspace/src/util/CometChatContext";

export default function CometChatWrapper({
  children,
  currentUser,
  currentGuest,
}) {
  //if currentUser has an chat AuthToken, log them in
  //else, use their name to create an account and log them in.
  const user = currentUser
    ? currentUser
    : currentGuest
    ? currentGuest.guest
    : null;
  const username = user ? `${user.firstname} ${user.lastname}` : null;
  // const [chatUser, setChatUser] = useState({});

  useEffect(() => {
    const chatSetup = async () => {
      if (!user) return null;
      if (user.chat_token) {
        appSetting();
        const resp = await loginChatWithAuthToken(user.chat_token);
        console.log(resp);
        // setChatUser(resp);
        return resp;
      } else {
        appSetting();
        const resp = await createChatUser(username);
        // setChatUser(resp.user);
        console.log(resp);
        const authToken = resp.authToken;
        if (currentGuest) {
          updateGuest(user.id, { chat_token: authToken });
        }
        if (currentUser) {
          updateUser(currentUser.id, {
            chat_token: authToken,
          });
        }
        loginChatWithAuthToken(authToken);
        // setChatUser(loginResp);
      }
    };
    chatSetup();
  }, [currentUser, currentGuest, username, user]);

  return <>{children}</>;
}
