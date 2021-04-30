import { CometChat } from "@cometchat-pro/chat";
import axios from "axios";
const appID = process.env.REACT_APP_COMETCHAT_APP_ID;
const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY;
const region = "us";

export const appSetting = () => {
  const client = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();
  CometChat.init(appID, client).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
  console.log(client);
  return client;
};

export const loginChatWithUsername = (username) => {
  const uid = username.split(" ").join("");
  // const uid = "SUPERHERO1";

  CometChat.login(uid, authKey).then(
    (user) => {
      console.log("Login Successful:", { user });
      return user;
    },
    (error) => {
      console.log("Login failed with exception:", { error });
      throw error;
    }
  );
};

export const loginChatWithAuthToken = async (authToken) => {
  // const uid = "SUPERHERO1";
  //change this to a try catch

  try {
    const user = await CometChat.login(authToken);
    console.log("Login Successful:", { user });
    return user;
  } catch (error) {
    console.log("Login failed with exception:", { error });
    throw error;
  }
  // CometChat.login(authToken).then(
  //   (user) => {
  //     console.log("Login Successful:", { user });
  //     return user;
  //   },
  //   (error) => {
  //     console.log("Login failed with exception:", { error });
  //     throw error;
  //   }
  // );
};

export const createChatUser = async (username) => {
  const uid = username.split(" ").join("");
  const name = username;

  // const user = { uid: uid, name: name };

  const newUser = new CometChat.User(uid);

  newUser.setName(name);

  // let token = "";

  try {
    const user = await CometChat.createUser(newUser, authKey);
    console.log("user created", user);
    const token = await generateAuthToken(user.uid);
    return { user: user, authToken: token };
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getChatUser = (username) => {
  var UID = username.split(" ").join("");
  CometChat.getUser(UID).then(
    (user) => {
      console.log("User details fetched for user:", user);
      return user;
    },
    (error) => {
      console.log("User details fetching failed with error:", error);
      throw error;
    }
  );
};

const generateAuthToken = async (uid) => {
  const options = {
    headers: { apiKey: authKey, appId: appID },
  };

  const body = JSON.stringify({ force: true });

  const response = await axios.post(
    `https://api-us.cometchat.io/v2.0/users/${uid}/auth_tokens`,
    body,
    options
  );
  console.log(response);
  return response.data.data.authToken;
};
