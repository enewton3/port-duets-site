import React from "react";
import vineborder from "../../assets/VineBorder.png";
import logo from "../../assets/friends_logo_rough.png";
import { makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  vines: {
    // backgroundImage: `url(${vineborder})`,
    height: "80vh",
    width: "80vw",
    position: "absolute",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  logo: { backgroundImage: `url(${logo})`, width: "50vw" },
  vimeoframe: {
    display: "flex",
    flexFlow: "column wrap",
    width: "60vw",
    margin: "0 auto",
    padding: "56.25% 0 0 0",
    position: "relative",
    "@media (max-width: 1024px)": { width: "100vw" },
  },
}));

export default function EventFrame(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
      <img src={vineborder} className={classes.vines} />
      {/* <div className={classes.vines}></div> */}
      {/* <div className={classes.logo} /> */}
    </div>
  );
}
