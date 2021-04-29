import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ChatButton from "../../components/Chat/ChatButton";
import EventFrame from "../../components/EventFrame/EventFrame";
import {
  ZoomButton,
  ProgramButton,
} from "../../components/shared/EventButtons";
import Sponsors from "../../components/Sponsors/Sponsors";
import Header from "../../components/shared/Header";
import GuestChat from "../../components/Chat/GuestChat";
import PopupChatWrapper from "../../components/Chat/PopupChatWrapper";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "12vh",
    paddingBottom: "12vh",
  },
  chatButton: {
    position: "absolute",
    right: "1vw",
    top: "11vh",
  },
  give: {
    fontFamily: "LaLuxe",
    fontSize: "1.8rem",
    // backgroundColor: theme.palette.primary.main,
    // boxShadow: "0px 0px 8px black",
    padding: "3vh 1vw 1vh 1vw",
    textAlign: "center",
  },
}));

export default function Table({ currentGuest }) {
  const classes = useStyles();
  const history = useHistory();
  const [chatOpen, setChatOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  if (!currentGuest) {
    history.push("/");
  }

  const handleClose = () => {
    setChatOpen(false);
  };

  return (
    <>
      <Header />
      <div className={classes.event}>
        <EventFrame />
        <Typography className={classes.give}>
          Text 'Duets' To <br />
          XXX.XXX.XXX to give
        </Typography>
        <Sponsors />
      </div>
      <div className={classes.chatButton}>
        <ChatButton
          chatOpen={chatOpen}
          setChatOpen={setChatOpen}
          setAnchorEl={setAnchorEl}
        />
      </div>
      <PopupChatWrapper
        chatOpen={chatOpen}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        {/* <PubnubChatWrapper username={chatUsername}> */}
        <GuestChat currentGuest={currentGuest} />
        {/* </PubnubChatWrapper> */}
      </PopupChatWrapper>
      <ProgramButton />
      <ZoomButton currentGuest={currentGuest} />
    </>
  );
}
