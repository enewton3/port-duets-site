import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ChatButton from "../../components/Chat/ChatButton";
import EventFrame from "../../components/EventFrame/EventFrame";
import EventButtons from "../../components/shared/EventButtons";
import Sponsors from "../../components/Sponsors/Sponsors";
import Header from "../../components/shared/Header";
import GuestChat from "../../components/Chat/GuestChat";
import PopupChatWrapper from "../../components/Chat/PopupChatWrapper";
import PubnubChatWrapper from "../../components/Chat/PubnubChatWrapper";

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
    right: 0,
    top: "10vh",
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

  const chatUsername = `${currentGuest?.guest.firstname} ${currentGuest?.guest.lastname}`;

  return (
    <>
      <Header />
      <div className={classes.event}>
        <EventFrame />
        <EventButtons currentGuest={currentGuest} />
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
        <PubnubChatWrapper username={chatUsername}>
          <GuestChat username={chatUsername} />
        </PubnubChatWrapper>
      </PopupChatWrapper>
    </>
  );
}
