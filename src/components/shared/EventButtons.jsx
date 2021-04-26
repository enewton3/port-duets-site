import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EventButton from "../EventButton/EventButton";
import joinimg from "../../assets/joinbutton.png";
import program from "../../assets/programbutton.png";
import { useParams } from "react-router-dom";

export default function EventButtons(props) {
  const params = useParams();
  const { currentGuest } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100vw",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      alignSelf: "center",
      justifySelf: "center",
      // marginBottom: "1vh",
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
    button: {
      width: "80%",
      // height: "50%",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        <Typography className={classes.text}>CLICK TO VIEW</Typography>
        <EventButton
          classTEST={classes.button}
          link="https://www.program.com"
          image={program}
        />
      </div>
      <Typography className={classes.give}>
        Text 'Friends' To <br />
        XXX.XXX.XXX to give
      </Typography>
      {params.id === "500" ? null : (
        <div className={classes.buttonContainer}>
          <Typography className={classes.text}>
            FOLLOWING THE EVENT <br /> CLICK TO EXIT AND
          </Typography>
          <EventButton
            classTEST={classes.button}
            link={currentGuest?.table.zoom_link}
            image={joinimg}
          />
        </div>
      )}
    </div>
  );
}
