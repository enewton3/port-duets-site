import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginForm from "../../components/LoginForm";
import HeaderGraphic from "../../components/HeaderGraphic";

const useStyles = makeStyles((theme) => ({
  welcome: {
    display: "flex",
    flexFlow: "column wrap",
    margin: "0 auto",
    width: "80vw",
    textAlign: "center",
    alignItems: "center",
  },
  blurb: {
    margin: "10vh 0 10vh 0 ",
    fontFamily: "Helvetica",
  },
}));

export default function Welcome({ currentUser }) {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <HeaderGraphic />
      {/* <Typography className={classes.blurb} variant="h4">
        Welcome to Edgerley Family South Boston Club's 45th Annual <br />
        St. Patrick's Day Luncheon!
      </Typography> */}
      <LoginForm />
    </div>
  );
}
