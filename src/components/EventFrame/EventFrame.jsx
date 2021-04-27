import React from "react";
import { makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import backgroundimg from "../../assets/framebackground.png";
import donatebutton from "../../assets/donatebutton.png";
import EventButton from "../EventButton/EventButton";

const useStyles = makeStyles((theme) => ({
  goldborder: {
    width: "65vw",
    height: "75vh",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    // margin: "0 auto",
    aspectRatio: "16/9",
    "@media (max-width: 900px)": { width: "80vw" },
    "@media (max-width: 650px)": { width: "90vw" },
    "@media (max-width: 450px)": { width: "100vw" },
  },
  vimeoframe: {
    width: "80%",
    maxHeight: "80%",
    paddingTop: "5vh",
    aspectRatio: "16/9",
    // marginBottom: "2vh",
    // justifySelf: "flex-end",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2vh",
  },
  button: {
    width: "15%",
    // alignSelf: "center",
    // justifySelf: "center",
    // margin: "0 auto",
  },
}));

export default function EventFrame() {
  const classes = useStyles();
  return (
    <div className={classes.goldborder}>
      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
      <div className={classes.buttonContainer}>
        <EventButton
          classTEST={classes.button}
          link="https://www.donate.com"
          image={donatebutton}
        />
      </div>
    </div>
  );
}
