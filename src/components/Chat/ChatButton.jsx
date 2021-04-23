import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import { IconButton, Tooltip } from "@material-ui/core";

export default function ChatButton({ setChatOpen, setAnchorEl }) {
  return (
    <Tooltip title="Open Tech Support Chat">
      <IconButton
        variant="outlined"
        onClick={(e) => {
          setChatOpen((prev) => !prev);
          setAnchorEl(e.target);
        }}
      >
        <HelpIcon />
      </IconButton>
    </Tooltip>
  );
}
