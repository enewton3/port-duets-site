import { makeStyles } from "@material-ui/core";
import React from "react";
import footerLogo from "../../assets/BGCBlogoWhite.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    // marginTop: "8vh",
    zIndex: "50",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img src={footerLogo} alt="bgcb footer logo" />
    </footer>
  );
}
