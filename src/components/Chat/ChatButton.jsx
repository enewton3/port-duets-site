import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "black",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function ChatButton({ setChatOpen, setAnchorEl, chatOpen }) {
  const classes = useStyles();
  return (
    <Tooltip title="Open Tech Support Chat">
      <IconButton
        className={classes.button}
        variant="outlined"
        onClick={(e) => {
          setChatOpen((prev) => !prev);
          setAnchorEl(e.currentTarget);
        }}
      >
        {chatOpen ? <CloseIcon /> : <HelpIcon />}
      </IconButton>
    </Tooltip>
  );
}
