import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import Chat from "../../components/Chat/Chat";
import ChatButton from "../../components/Chat/ChatButton";
import ChatWrapper from "../../components/Chat/ChatWrapper";
import EventFrame from "../../components/EventFrame/EventFrame";
// import Footer from "../../components/shared/EventButtons";
import CustomChat from "../../components/Chat/Chat";
import EventButtons from "../../components/shared/EventButtons";
import Sponsors from "../../components/Sponsors/Sponsors";
import Header from "../../components/shared/Header";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    // height: "100%",
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
  chatButton: {
    // display: "flex",
    // flexFlow: "column wrap",
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
  // const [messages, setMessages] = useState([]);

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
      <ChatWrapper
        chatOpen={chatOpen}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <CustomChat
          username={`${currentGuest.guest.firstname} ${currentGuest.guest.lastname}`}
        />
      </ChatWrapper>
    </>
  );
}
