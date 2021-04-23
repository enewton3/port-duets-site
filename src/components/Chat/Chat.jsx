import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Messages from "./Messages";

const useStyles = makeStyles((theme) => ({
  chatDialog: {},
}));

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

export default function Chat(props) {
  const {
    currentGuest,
    currentUser,
    // messages,
    // setMessages
  } = props;

  const username = currentUser
    ? `${currentUser.firstname} ${currentUser.lastname}`
    : currentGuest
    ? `${currentGuest.guest.firstname} ${currentGuest.guest.lastname}`
    : "";

  const classes = useStyles();

  const [member, setMember] = useState({
    username: username,
    color: randomColor(),
  });

  const [messages, setMessages] = useState([]);

  const [drone, setDrone] = useState(
    new window.Scaledrone("SV89KgSeZxRnyi88", {
      data: member.username,
    })
  );

  drone.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    setMember((prev) => ({ ...prev, id: drone.clientId }));
  });

  const room = drone.subscribe("observable-room", {
    historyCount: 10,
  });

  room.on("data", (data, member) => {
    if (messages) {
      const newMessages = [...messages];
      newMessages.push({ member, text: data });
      setMessages(newMessages);
    }
  });

  room.on("members", (members) => {
    console.log(members);
  });

  // room.on("history_message", (message) => {
  //   console.log(message);
  // });

  const sendMessage = (input) => {
    console.log(input);
    drone.publish({
      room: "observable-room",
      message: input,
    });
  };

  // useEffect(() => {
  //   return function cleanup() {
  //     room.unsubscribe();
  //     drone.close();
  //   };
  // }, [drone, room]);

  return (
    <>
      {`Hello ${username}`}
      <Messages messages={messages} currentMember={member} />
      <Input sendMessage={sendMessage} />
    </>
  );
}
