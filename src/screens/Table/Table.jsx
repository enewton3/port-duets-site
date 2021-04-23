import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import ChatButton from "../../components/Chat/ChatButton";
import ChatWrapper from "../../components/Chat/ChatWrapper";
import EventFrame from "../../components/EventFrame/EventFrame";
import Footer from "../../components/shared/Footer";
import Layout from "../../components/shared/Layout";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    // paddingTop: "10vh",
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
    <Layout>
      <div className={classes.event}>
        <EventFrame />
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
        <Chat
          setChatOpen={setChatOpen}
          currentGuest={currentGuest}
          // messages={messages}
          // setMessages={setMessages}
        />
      </ChatWrapper>

      <Footer currentGuest={currentGuest} />
    </Layout>
  );
}
