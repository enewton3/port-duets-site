import { makeStyles } from "@material-ui/core";
import React from "react";
import footerLogo from "../../assets/cancer_center_logo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
  },
  logo: {
    width: "20vw",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img
        className={classes.logo}
        src={footerLogo}
        alt="MGH cancer center logo"
      />
    </footer>
  );
}
