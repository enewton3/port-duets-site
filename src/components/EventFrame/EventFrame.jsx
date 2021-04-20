import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import backgroundimg from "../../assets/framebackground.png";
import donatebutton from "../../assets/donatebutton.png";
import EventButton from "../EventButton/EventButton";

const useStyles = makeStyles((theme) => ({
  goldborder: {
    width: "70vw",
    height: "80vh",
    // backgroundColor: "goldenrod",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    // padding: "5vh 0 2vh 0",
    "@media (max-width: 900px)": { width: "80vw" },
    "@media (max-width: 650px)": { width: "90vw" },
    "@media (max-width: 450px)": { width: "100vw" },
  },
  vimeoframe: { width: "80%", marginBottom: "2vh" },
  button: { width: "17%", height: "8%" },
}));

export default function EventFrame() {
  const classes = useStyles();
  return (
    <div className={classes.goldborder}>
      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
      <EventButton
        height={classes.button.height}
        width={classes.button.width}
        link="https://www.donate.com"
        image={donatebutton}
      />
    </div>
  );
}
