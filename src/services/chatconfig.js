import { CometChat } from "@cometchat-pro/chat";
// import PubNub from "pubnub";

// export const pubnub = (username) => {
//   const client = new PubNub({
//     publishKey: process.env.REACT_APP_PUBNUB_PUB_KEY,
//     subscribeKey: process.env.REACT_APP_PUBNUB_SUB_KEY,
//     uuid: username,
//   });
//   return client;
// };

// export const welcomeMsgs = [
//   {
//     message: {
//       type: "welcome",
//       text:
//         "Send a message to begin a conversation with our support staff. The name you used to sign up is the name that will be displayed.",
//       sender: {
//         profileUrl: "",
//         id: "Evyn Newton",
//         eTag: "",
//         updated: "",
//       },
//     },
//     uuid: "Evyn Newton",
//     timetoken: "16165836271766362",
//   },
// ];
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

export const loginChat = (username) => {
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

export const createChatUser = (username) => {
  const uid = username.split(" ").join("");
  const name = username;

  const user = { uid: uid, name: name };
  // const user = new CometChat.user(uid);

  // user.setName(name);

  CometChat.createUser(user, authKey).then(
    (user) => {
      console.log("user created", user);
      return user;
    },
    (error) => {
      console.log("error", error);
    }
  );
};

export const getChatUser = (username) => {
  var UID = username.split(" ").join("");
  CometChat.getUser(UID).then(
    (user) => {
      console.log("User details fetched for user:", user);
    },
    (error) => {
      console.log("User details fetching failed with error:", error);
      throw error;
    }
  );
};
