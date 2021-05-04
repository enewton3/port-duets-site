import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../../assets/cancer_center_logo.png";
import headerfriends from "../../assets/headerfriendslogo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgb(0,0,0)",
    // height: "10vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
    // padding: "1vh",
  },
  container: {
    width: "98%",
    height: "10vh",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh",
  },
  logo: {
    height: "85%",
    // paddingTop: "1vh",
    // paddingLeft: "1vw",
    // paddingBottom: "1vh",
  },
  headerBlurb: {
    // textAlign: "right",
    height: "80%",
    // paddingRight: "1vw",
    // paddingTop: "1vh",
    // paddingBottom: "1vh",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <img className={classes.logo} src={logo} alt="MGH cancer center logo" />
        <img
          className={classes.headerBlurb}
          src={headerfriends}
          alt="Friends of MGH Logo"
        />
      </div>
    </div>
  );
}
