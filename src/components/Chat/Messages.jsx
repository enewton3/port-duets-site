import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  messagesContainer: {
    border: "2px solid hotpink",
    width: "100%",
    // maxHeight: "30vh",
  },
  message: {
    border: "2px solid black",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Messages({ messages, currentMember }) {
  const classes = useStyles();

  return (
    <div className={classes.messagesContainer}>
      {messages.length < 1 ? (
        <div>
          Send a message to begin a conversation with our support staff. <br />
          The name you used to sign up is the name that will be displayed.
        </div>
      ) : null}
      {messages.map((message, index) => {
        const { member, text } = message;
        // const messageFromMe = member.id === currentMember.id;
        return (
          <div
            key={`message ${index}`}
            className={classes.message}
            // style={
            //   messageFromMe
            //     ? { justifySelf: "flex-end" }
            //     : { justifySelf: "flex-start" }
            // }
          >
            <div>
              <Avatar style={{ backgroundColor: `${member.clientData.color}` }}>
                {member?.clientData[0]}
              </Avatar>
              <Typography>{member?.clientData}</Typography>
            </div>
            <Typography>{text}</Typography>
          </div>
        );
      })}
    </div>
  );
}
