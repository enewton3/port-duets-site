import {
  AppBar,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import GuestList from "../../components/GuestList/GuestList";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh 1vw 1vh 1vw",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
  panelBody: {
    paddingTop: "9vh",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    "@media (max-width: 800px)": {
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "8vh",
    },
  },
  paper: {
    width: "45vw",
    padding: "2vh 2vw 2vh 2vw",
    maxHeight: "80vh",
    overflowY: "scroll",
    "@media (max-width: 800px)": {
      width: "80vw",
      marginTop: "2vh",
    },
  },
}));

export default function AdminPanel({ handleLogout }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Link to="/" className={classes.link}>
          <Button className={classes.link}>
            <Typography>BGCB Virtual Events Admin Panel</Typography>
          </Button>
        </Link>
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </AppBar>

      <div className={classes.panelBody}>
        <Paper className={classes.paper}>
          <VimeoFrame />
        </Paper>
        <Paper className={classes.paper}>
          <GuestList />
        </Paper>
      </div>
    </div>
  );
}
