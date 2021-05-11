import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EventButton from "../EventButton/EventButton";
import joinimg from "../../assets/joinbutton.png";
import program from "../../assets/programbutton.png";

const useStyles = makeStyles((theme) => ({
  programButtonContainer: {
    position: "fixed",
    left: "1vw",
    bottom: "1vw",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  zoomButtonContainer: {
    position: "fixed",
    right: "1vw",
    bottom: "1vw",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  text: {
    fontFamily: "Libre Baskerville",
    fontWeight: "bold",
    fontSize: "1rem",
    paddingBottom: "1vh",
  },
  button: {
    width: "12vw",
    height: "5vh",
    "@media (max-width: 1024px)": { width: "20vw" },
    "@media (max-width: 768px)": { width: "25vw" },
    "@media (max-width: 480px)": { width: "30vw" },
  },
}));

export const ProgramButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.programButtonContainer}>
      <Typography className={classes.text}>CLICK TO VIEW</Typography>
      <EventButton
        classTEST={classes.button}
        link="https://www.program.com"
        image={program}
      />
    </div>
  );
};

export const ZoomButton = (props) => {
  const { currentGuest } = props;
  const classes = useStyles();
  return (
    <div className={classes.zoomButtonContainer}>
      <Typography className={classes.text}>
        FOLLOWING <br />
        THE EVENT <br /> CLICK TO EXIT
      </Typography>
      <EventButton
        classTEST={classes.button}
        link={currentGuest?.table.zoom_link}
        image={joinimg}
      />
    </div>
  );
};
