// import classes from "*.module.css";
import { Grow, makeStyles, Paper, Popper } from "@material-ui/core";
import React from "react";

export default function PopupChatWrapper(props) {
  const {
    children,
    chatOpen,
    anchorEl,
    // handleClose
  } = props;

  const useStyles = makeStyles((theme) => ({
    popper: {
      display: chatOpen ? "block" : "none",
      // maxHeight: "40vh",
      // maxWidth: "30vw",
    },
    paper: {
      height: "50vh",
      width: "20vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();
  return (
    <Popper
      open={chatOpen}
      anchorEl={anchorEl}
      role={undefined}
      transition
      disablePortal
      keepMounted
      className={classes.popper}
      placement="left-start"
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          {/* <ClickAwayListener onClickAway={handleClose}> */}
          <Paper className={classes.paper}>{children}</Paper>
          {/* </ClickAwayListener> */}
        </Grow>
      )}
    </Popper>
  );
}
