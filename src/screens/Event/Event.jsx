import { Button, makeStyles } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React from "react";
import { useHistory } from "react-router";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    paddingBottom: "10vh",
  },
  // bg: {
  //   backgroundImage: `url(${backgroundimg})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   transform: "rotate(180deg)",
  //   width: "100vw",
  //   height: "100vh",
  //   position: "absolute",
  //   top: 0,
  // },
  logo: { width: "20vw" },
  vimeoframe: {
    display: "flex",
    flexFlow: "column wrap",
    width: "60vw",
    margin: "0 auto",
    "@media (max-width: 1024px)": { width: "100vw" },
  },
  input: { color: "white", background: "white" },
  donatelink: { textDecoration: "none" },
  button: {
    background: orange[500],
    color: "white",
    margin: "3vh auto",
    height: "8vh",
    fontSize: "1.5rem",
    boxShadow: "2px 2px 5px black",
    "&:hover": {
      backgroundColor: orange[400],
      color: "#FFF",
    },
  },
  socialbutton: {
    textAlign: "center",
    borderColor: "grey",
    padding: 0,
    borderRadius: "100px",
    backgroundColor: theme.palette.primary.main,
    height: "7vh",
    width: "7vw",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  fb: {
    color: "white",
  },
}));

export default function Event({ currentUser }) {
  const classes = useStyles();
  const history = useHistory();

  // if (!currentUser) {
  //   history.push("/");
  // }

  return (
    <div className={classes.event}>
      {/* <div className={classes.bg}></div> */}
      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
      <a
        href="https://www.bgcb.org/spring"
        target="blank"
        rel="noreferrer"
        className={classes.donatelink}
      >
        <Button variant="outlined" className={classes.button}>
          DONATE
        </Button>
      </a>
      <a
        href="https://www.facebook.com/artemiscircle"
        target="blank"
        rel="noreferrer"
        className={classes.socialLink}
      >
        <Button fullWidth variant="outlined" className={classes.socialbutton}>
          <FacebookIcon
            className={classes.fb}
            fontSize="large"
            // color="primary"
          />
        </Button>
      </a>
    </div>
  );
}
