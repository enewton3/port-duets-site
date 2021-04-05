import { makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      {props.children}
      <Footer />
    </div>
  );
}
