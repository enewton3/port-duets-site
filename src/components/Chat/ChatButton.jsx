import React from "react";
// import HelpIcon from "@material-ui/icons/Help";
// import CloseIcon from "@material-ui/icons/Close";
import {
  Button,
  // IconButton,
  makeStyles,
  // Tooltip,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    // backgroundColor: theme.palette.primary.main,
    // color: "black",
    // "&:hover": {
    //   backgroundColor: theme.palette.primary.light,
    // },
    backgroundColor: "black",
    color: "white",
    width: "15vw",
    height: "6vh",
    fontFamily: "LaLuxe",
    "&:hover": {
      backgroundColor: "#2c2c2c",
    },
    fontSize: "1.2rem",
  },
}));

const CustomButton = withStyles((theme) => ({
  root: {
    borderRadius: "0px",
  },
}))(Button);

export default function ChatButton({ setChatOpen, setAnchorEl, chatOpen }) {
  const classes = useStyles();
  return (
    <CustomButton
      className={classes.button}
      onClick={(e) => {
        setChatOpen((prev) => !prev);
        setAnchorEl(e.currentTarget);
      }}
    >
      Tech Support
    </CustomButton>
  );
}

// <Tooltip title="Open Tech Support Chat">
/* <IconButton
        className={classes.button}
        variant="outlined"
        onClick={(e) => {
          setChatOpen((prev) => !prev);
          setAnchorEl(e.currentTarget);
        }}
      >
        {chatOpen ? <CloseIcon /> : <HelpIcon />}
      // </IconButton> */
// {/* </Tooltip> */}
