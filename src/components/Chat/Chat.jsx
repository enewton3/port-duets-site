import {
  ClickAwayListener,
  Grow,
  makeStyles,
  Paper,
  Popper,
} from "@material-ui/core";
import React, { useState } from "react";
import Input from "./Input";
import Messages from "./Messages";

const useStyles = makeStyles((theme) => ({
  chatDialog: {},
}));

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

export default function Chat(props) {
  const { chatOpen, setChatOpen, currentGuest, anchorEl } = props;
  const username = `${currentGuest.guest.firstname} ${currentGuest.guest.lastname}`;
  const classes = useStyles();
  const [guest, setGuest] = useState({
    username: username,
    color: randomColor(),
  });

  const [messages, setMessages] = useState([
    {
      text: "This is a test message!",
      guest: {
        color: "blue",
        username: "bluemoon",
      },
    },
  ]);

  const handleClose = () => {
    setChatOpen(false);
  };

  const drone = new window.ScaleDrone(
    `${process.env.REACT_APP_SCALEDRONE_CHANNEL}`,
    {
      data: username,
    }
  );

  drone.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    const guest = { ...guest };
    guest.id = drone.clientId;
    setGuest({ guest });
  });

  const room = drone.subscribe("observable-room");

  room.on("data", (data, guest) => {
    const messages = messages;
    messages.push({ guest, text: data });
    setMessages({ messages });
  });

  const sendMessage = (input) => {
    console.log(input);
    // setMessages((prev) => [
    //   ...prev,
    //   {
    //     text: input,
    //     guest: {
    //       username: username,
    //     },
    //   },
    // ]);
    drone.publish({
      room: "observable-room",
      input,
    });
  };

  return (
    <Popper
      open={chatOpen}
      anchorEl={anchorEl}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <div>
                <Messages messages={messages} currentGuest={currentGuest} />
                <Input sendMessage={sendMessage} />
              </div>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
