import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import ChatButton from "../../components/Chat/ChatButton";
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
}));

export default function Table({ currentGuest }) {
  const classes = useStyles();
  const history = useHistory();
  const [chatOpen, setChatOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  if (!currentGuest) {
    history.push("/");
  }

  return (
    <Layout>
      <div className={classes.event}>
        <EventFrame />
      </div>
      <ChatButton
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
        setAnchorEl={setAnchorEl}
      />

      <Chat
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
        currentGuest={currentGuest}
        anchorEl={anchorEl}
      />

      <Footer currentGuest={currentGuest} />
    </Layout>
  );
}
