import { AppBar, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <AppBar className={classes.appbar}>
      <Link to="/" className={classes.link}>
        <Button className={classes.link}>
          <Typography>Duets Event Admin Panel</Typography>
        </Button>
      </Link>
      {currentUser ? (
        <Typography className={classes.welcome}>
          Hi {currentUser.firstname}!
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
  );
}
