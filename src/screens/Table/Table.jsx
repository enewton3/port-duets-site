import { Button, makeStyles, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";
import EventFrame from "../../components/EventFrame/EventFrame";
import Layout from "../../components/shared/Layout";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    // margin: "0 auto",
    // paddingBottom: "10vh",
    height: "100vh",
    width: "100vw",
  },
  give: { alignSelf: "flex-end" },
  button: { alignSelf: "flex-end", backgroundColor: purple[800] },
}));

export default function Table({ currentGuest }) {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.event}>
        <Typography className={classes.give}>
          Text To Give - XXX.XXX.XXX
        </Typography>
        <a
          className={classes.button}
          href="https://www.donate.com"
          rel="noreferrer"
          target="blank"
        >
          <Button variant="outlined" color="primary">
            Donate
          </Button>
        </a>
        <EventFrame />
        <a className={classes.button} href={currentGuest?.table.zoom_link}>
          <Button variant="outlined" color="primary">
            Program Book
          </Button>
        </a>
        <a className={classes.button} href={currentGuest?.table.zoom_link}>
          <Button variant="outlined" color="primary">
            Following the program, join your table here
          </Button>
        </a>
      </div>
    </Layout>
  );
}
