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
  },
  vimeoframe: {
    // padding: "56.25% 0 0 0",
    width: "80%",
    // height: "73%",
    aspectRatio: "16/9",
    "@media (max-width: 900px)": { width: "90%" },
    // "@media (max-width: 650px)": { width: "90vw" },
    "@media (max-width: 450px)": { width: "95%" },
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // margin: "2vh 0 2vh 0",
  },
  button: {
    width: "10vw",
    height: "5vh",
    alignSelf: "center",
    justifySelf: "center",
    // margin: "0 auto",
    // "@media (max-width: 1200px)": { width: "80vw", backgroundSize: "80vw 70vh" },
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
      <div className={classes.vimeoframe}>
        <VimeoFrame />
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
