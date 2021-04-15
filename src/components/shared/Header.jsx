import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logo from "../../assets/cancer_center_logo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgb(29,29,27)",
    height: "10vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { height: "100%" },
  headerBlurb: { textAlign: "right" },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img className={classes.logo} src={logo} alt="MGH cancer center logo" />
      <Typography className={classes.headerBlurb}>
        The Friends of the <br />
        Mass General Cancer Center
      </Typography>
    </div>
  );
}
