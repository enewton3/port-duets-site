import PubNub from "pubnub";

export const pubnub = (username) => {
  const client = new PubNub({
    publishKey: process.env.REACT_APP_PUBNUB_PUB_KEY,
    subscribeKey: process.env.REACT_APP_PUBNUB_SUB_KEY,
    uuid: username,
  });
  return client;
};

export const welcomeMsgs = [
  {
    message: {
      type: "welcome",
      text:
        "Send a message to begin a conversation with our support staff. The name you used to sign up is the name that will be displayed.",
      sender: {
        profileUrl: "",
        id: "Evyn Newton",
        eTag: "",
        updated: "",
      },
    },
    uuid: "Evyn Newton",
    timetoken: "16165836271766362",
  },
];
