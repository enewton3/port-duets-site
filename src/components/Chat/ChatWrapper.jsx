// import classes from "*.module.css";
import { Grow, makeStyles, Paper, Popper } from "@material-ui/core";
import React from "react";

export default function ChatWrapper(props) {
  const {
    children,
    chatOpen,
    anchorEl,
    // handleClose
  } = props;

  const useStyles = makeStyles((theme) => ({
    popper: {
      display: chatOpen ? "block" : "none",
      maxHeight: "40vh",
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
          <Paper>{children}</Paper>
          {/* </ClickAwayListener> */}
        </Grow>
      )}
    </Popper>
  );
}
