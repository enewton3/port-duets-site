import { AppBar, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupChatWrapper from "../Chat/PopupChatWrapper";
import UserDialog from "../UserDialog/UserDialog";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh 1vw 1vh 1vw",
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  logoutButton: {
    color: "white",
    backgroundColor: theme.palette.secondary.light,
    borderColor: "white",
  },
  welcome: { color: "white" },
}));

export default function AdminNav({ handleLogout, currentUser }) {
  const classes = useStyles();
  const [chatOpen, setChatOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <AppBar className={classes.appbar}>
        <Link to="/" className={classes.link}>
          <Button className={classes.link}>
            <Typography>Duets Event Admin Panel</Typography>
          </Button>
        </Link>
        {currentUser.firstname === "evyn" ? (
          <Typography className={classes.welcome}>
            Hi{" "}
            <Button
              onClick={(e) => {
                setChatOpen((prev) => !prev);
                setAnchorEl(e.currentTarget);
              }}
            >
              {currentUser.firstname}
            </Button>
            !
          </Typography>
        ) : null}
        <Button
          className={classes.logoutButton}
          variant="outlined"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </AppBar>
      <PopupChatWrapper chatOpen={chatOpen} anchorEl={anchorEl}>
        <UserDialog />
      </PopupChatWrapper>
    </>
  );
}
