import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";

const useStyles = makeStyles((theme) => ({
  goldborder: {
    width: "70vw",
    backgroundColor: "goldenrod",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "5vh 0 2vh 0",
    "@media (max-width: 900px)": { width: "80vw" },
    "@media (max-width: 650px)": { width: "90vw" },
    "@media (max-width: 450px)": { width: "100vw" },
  },
  vimeoframe: { width: "80%" },
  link: {
    textDecoration: "none",
    marginTop: "1vh",
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default function EventFrame() {
  const classes = useStyles();
  return (
    <div className={classes.goldborder}>
      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
      <a
        className={classes.link}
        href="https://www.donate.com"
        rel="noreferrer"
        target="blank"
      >
        <Button className={classes.button} variant="outlined" color="primary">
          Donate Now
        </Button>
      </a>
    </div>
  );
}
