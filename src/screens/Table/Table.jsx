import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import EventFrame from "../../components/EventFrame/EventFrame";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    // paddingBottom: "10vh",
    height: "100vh",
    width: "100vw",
  },
}));

export default function Table({ currentGuest }) {
  const classes = useStyles();

  return (
    <div className={classes.event}>
      <EventFrame />
      <a href={currentGuest?.table.zoom_link}>
        <Button variant="outlined" color="primary">
          Table Zoom Link
        </Button>
      </a>
    </div>
  );
}
