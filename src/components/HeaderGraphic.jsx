import { makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../assets/LandingPageHeader.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    // maxWidth: "500px",
    alignSelf: "center",
    margin: "5vh 0 5vh 0",
    zIndex: "50",
    width: "50vw",
    "@media (max-width: 1024px)": { width: "60vw" },
  },
}));

export default function Logo({ width }) {
  const classes = useStyles();
  return (
    <img
      className={classes.logo}
      width={width ? width : classes.logo.width}
      src={logo}
      alt="logo"
    />
  );
}
