import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EventButton from "../EventButton/EventButton";
import joinimg from "../../assets/joinbutton.png";
import program from "../../assets/programbutton.png";

export default function Footer(props) {
  const { currentGuest } = props;
  const useStyles = makeStyles((theme) => ({
    footer: {
      position: "fixed",
      bottom: 0,
      width: "95vw",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      alignSelf: "center",
      justifySelf: "center",
      // padding: "0 1vw 1vh 1vw",
    },
    buttonContainer: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    give: {
      fontFamily: "LaLuxe",
      alignSelf: "flex-end",
    },
    text: {
      fontFamily: "Libre Baskerville",
      fontWeight: "bold",
    },
    button: { width: "10%", height: "8%" },
  }));
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.buttonContainer}>
        <Typography className={classes.text}>CLICK TO VIEW</Typography>
        <EventButton
          width={`${classes.button.width}`}
          height={classes.button.height}
          link="https://www.program.com"
          image={program}
        />
      </div>
      <Typography className={classes.give}>
        Text 'Friends' To <br />
        XXX.XXX.XXX to give
      </Typography>
      <div className={classes.buttonContainer}>
        <Typography className={classes.text}>
          FOLLOWING THE EVENT <br /> CLICK TO EXIT AND
        </Typography>
        <EventButton
          width={classes.button.width}
          height={classes.button.height}
          link={currentGuest?.table.zoom_link}
          image={joinimg}
        />
      </div>
    </footer>
  );
}
