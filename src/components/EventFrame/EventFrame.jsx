import React from "react";
import { makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import backgroundimg from "../../assets/framebackground.png";
import donatebutton from "../../assets/donatebutton.png";
import EventButton from "../EventButton/EventButton";

const useStyles = makeStyles((theme) => ({
  goldborder: {
    width: "60vw",
    height: "70vh",
    // width: "100%",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "60vw 70vh",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "space-evenly",

    // "@media (max-width: 1200px)": { width: "80vw", backgroundSize: "80vw 70vh" },
    "@media (max-width: 1024px)": {
      width: "80vw",
      // height: "70vh",
      backgroundSize: "80vw 70vh",
    },
    "@media (max-width: 768px)": {
      width: "90vw",
      height: "60vh",
      backgroundSize: "90vw 60vh",
    },
    "@media (max-width: 480px)": {
      width: "100vw",
      height: "50vh",
      backgroundSize: "100vw 50vh",
    },
  },
  spacer: {
    width: "100%",
    height: "5%",
    "@media only screen and (min-device-width: 375px) and (max-device-width: 850px) and (orientation: landscape)":
      { display: "none" },
  },
  container: {
    width: "100%",
    // width: "83%",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    "@media only screen and (min-device-width: 320px) and (max-device-width: 850px) and (orientation: landscape)":
      {
        position: "absolute",
        top: "4vh",
        // width: "100vw",
        height: "100vh",
      },
    //iphoneX
    // "@media only screen and (min-device-width: 375px) and (max-device-width: 850px)   and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)":
    //   {
    //     position: "absolute",
    //     top: "5vh",
    //     width: "80vw",
    //     // height: "73vh",
    //   },
  },
  vimeoframe: {
    width: "80%",
    height: "73%",
    // aspectRatio: "16/9",
    "@media (max-width: 900px)": { width: "90%" },
    "@media (max-width: 650px)": { width: "80%" },
    "@media (max-width: 450px)": { width: "95%" },
    "@media only screen and (min-device-width: 375px) and (max-device-width: 850px) and (orientation: landscape)":
      { width: "100%", height: "100%" },
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: "10vw",
    height: "5vh",
    alignSelf: "center",
    justifySelf: "center",
    // "@media (max-width: 1200px)": { marginTop: "0" },
    "@media (max-width: 1024px)": { width: "20vw" },
    "@media (max-width: 768px)": { width: "25vw" },
    "@media (max-width: 480px)": { width: "30vw" },
  },
}));

export default function EventFrame() {
  const classes = useStyles();

  return (
    <div className={classes.goldborder}>
      <div className={classes.spacer}></div>
      <div className={classes.container}>
        <div className={classes.vimeoframe}>
          <VimeoFrame />
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <EventButton
          classTEST={classes.button}
          link="https://giving.massgeneral.org/donate/duets/"
          image={donatebutton}
        />
      </div>
    </div>
  );
}
