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
      width: "100%",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      alignItems: "flex-end",
      textAlign: "center",
      marginBottom: "1.5vh",
    },
    buttonContainer: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "20%",
      width: "20%",
      margin: 0,
      padding: 0,
    },
    give: {
      fontFamily: "LaLuxe",
      fontSize: "2.5rem",
      // backgroundColor: theme.palette.primary.main,
      // boxShadow: "0px 0px 8px black",
      padding: "1vh 1vw 1vh 1vw",
    },
    text: {
      fontFamily: "Libre Baskerville",
      fontWeight: "bold",
      fontSize: "2rem",
      paddingBottom: "1vh",
    },
    button: {
      width: "15vw",
      height: "6vh",
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
        Text 'Duets' To <br />
        XXX.XXX.XXX to give
      </Typography>
      {params.id === "500" ? null : (
        <div className={classes.buttonContainer}>
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
      )}
    </div>
  );
}
