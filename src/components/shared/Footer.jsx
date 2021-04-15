import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "flex-end",
    textAlign: "center",
  },
  give: {},
  link: {
    textDecoration: "none",
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default function Footer(props) {
  const { currentGuest } = props;
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div>
        <Typography>Click to View</Typography>
        <a className={classes.link} href={currentGuest?.table.zoom_link}>
          <Button className={classes.button} variant="outlined" color="primary">
            Program Book
          </Button>
        </a>
      </div>
      <Typography className={classes.give}>
        Text 'Friends' To <br />
        XXX.XXX.XXX to give
      </Typography>
      <div>
        <Typography>
          Following the Event <br /> Click to exit and
        </Typography>
        <a className={classes.link} href={currentGuest?.table.zoom_link}>
          <Button className={classes.button} variant="outlined" color="primary">
            Join your table
          </Button>
        </a>
      </div>
    </footer>
  );
}
