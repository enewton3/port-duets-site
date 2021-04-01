import React from "react";
import vineborder from "../../assets/VineBorder.png";
import logo from "../../assets/friends_logo_rough.png";
import { makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";

const useStyles = makeStyles(() => ({
  root: {
    // display: "flex",
    // position: "absolute",
    // alignItems: "center",
    // justifyContent: "center",
    width: "60vw",
    height: "80vh",
    // "@media (max-width: 500px)": { height: "40vh" },
    display: "grid",
    alignItems: "center",
    "@media (max-width: 1024px)": { width: "100vw", height: "60vh" },
  },
  bg: {
    backgroundColor: "rgb(69, 119, 135)",
    justifySelf: "center",
    alignSelf: "center",
    height: "95%",
    width: "97%",
    borderTopLeftRadius: "70% 20%",
    borderTopRightRadius: "70% 20%",
    borderBottomRightRadius: "2%",
    borderBottomLeftRadius: "2%",
    gridArea: "1 / 1",
    marginBottom: "-3vh",
    boxShadow: "0px 20px 20px black",

    // "@media (max-width: 800px)": {
    //   width: "98%",
    //   height: "83%",
    // marginBottom: "0",
    // },
    // "@media (max-width: 500px)": {
    //   width: "98%",
    //   height: "85%",
    //   marginBottom: "0",
    // },
    // "@media (max-width: 300px)": {
    //   width: "98%",
    //   height: "90%",
    //   marginBottom: "0",
    // },
    // "@media (max-height: 850px)": {
    //   width: "98%",
    //   height: "70%",
    //   marginBottom: "0",
    // },
  },
  vines: {
    backgroundImage: `url(${vineborder})`,
    height: "100%",
    width: "100%",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    pointerEvents: "none",
    zIndex: "5000",
    gridArea: "1/1",
    alignSelf: "flex-end",
    justifySelf: "center",
    display: "flex",
    // gridTemplateAreas: "1 2 3",
    flexFlow: "column wrap",
    alignItems: "center",
    "@media (max-width: 1024px)": { width: "100vw" },
  },
  logo: {
    // gridArea: "2",
    // alignSelf: "flex-start",
    // justifySelf: "center",
    "@media (max-width: 500px)": { width: "12vw" },
  },
  vimeoframe: {
    marginBottom: "1vh",
    gridArea: "1/1",
    width: "95%",
    alignSelf: "flex-end",
    justifySelf: "center",
    "@media (max-width: 1024px)": { width: "90%", marginBottom: "0" },
  },
}));

export default function EventFrame() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg}></div>
      <div className={classes.vines}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>

      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
    </div>
  );
}
