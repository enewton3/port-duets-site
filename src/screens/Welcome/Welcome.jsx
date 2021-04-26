import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/shared/Header";
// import Layout from "../../components/shared/Layout";

const useStyles = makeStyles((theme) => ({
  welcome: {
    display: "flex",
    flexFlow: "column wrap",
    margin: "0 auto",
    width: "80vw",
    height: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  blurb: {
    margin: "10vh 0 10vh 0 ",
    fontFamily: "Helvetica",
  },
}));

export default function Welcome({ loginGuest, setCurrentGuest }) {
  const classes = useStyles();

  return (
    // <Layout>
    <>
      <Header />
      <div className={classes.welcome}>
        <LoginForm loginGuest={loginGuest} />
      </div>
    </>
    // {/* </Layout> */}
  );
}
