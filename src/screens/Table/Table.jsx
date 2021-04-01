import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import EventFrame from "../../components/EventFrame/EventFrame";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    margin: "0 auto",
    paddingBottom: "10vh",
  },
}));

export default function Table({ currentGuest }) {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();

  return (
    <div className={classes.event}>
      <EventFrame />
    </div>
  );
}
