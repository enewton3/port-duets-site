import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../../assets/cancer_center_logo.png";
import headerfriends from "../../assets/headerfriendslogo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgb(0,0,0)",
    height: "10vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "",
  },
  logo: { height: "100%" },
  headerBlurb: { textAlign: "right", height: "80%" },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img className={classes.logo} src={logo} alt="MGH cancer center logo" />
      <img
        className={classes.headerBlurb}
        src={headerfriends}
        alt="Friends of MGH Logo"
      />
    </div>
  );
}
