import React, { useEffect } from "react";
import {
  appSetting,
  createChatUser,
  loginChatWithAuthToken,
} from "../../services/chatconfig";

import { updateUser } from "../../services/auth";
import { updateGuest } from "../../services/guests";

export default function CometChatWrapper({
  children,
  currentUser,
  currentGuest,
}) {
  //if currentUser has an chat AuthToken, log them in
  //else, use their name to create an account and log them in.
  // const [chatUser, setChatUser] = useState({});
  const user = currentUser
    ? currentUser
    : currentGuest
    ? currentGuest.guest
    : null;
  const username = user ? `${user.firstname} ${user.lastname}` : null;

  useEffect(() => {
    const chatSetup = async () => {
      appSetting();
      if (!user) return null;
      if (user.chat_token) {
        const resp = await loginChatWithAuthToken(user.chat_token);
        console.log(resp);
        return resp;
      } else {
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
      }
    };
    chatSetup();
  }, [currentUser, currentGuest, username, user]);

  return <>{children}</>;
}
