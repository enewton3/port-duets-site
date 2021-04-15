import { makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import EventFrame from "../../components/EventFrame/EventFrame";
import Footer from "../../components/shared/Footer";
import Layout from "../../components/shared/Layout";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
  },
}));

export default function Table({ currentGuest }) {
  const classes = useStyles();
  const history = useHistory();

  if (!currentGuest) {
    history.push("/");
  }

  return (
    <Layout>
      <div className={classes.event}>
        <EventFrame />
      </div>
      <Footer currentGuest={currentGuest} />
    </Layout>
  );
}
