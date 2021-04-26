// import { makeStyles } from "@material-ui/core";
import React from "react";
// import Footer from "./Footer";
import Header from "./Header";
// const useStyles = makeStyles((theme) => ({
//   layout: {
//     display: "flex",
//     alignItems: "center",
//     // width: "100vw",
//     // height: "100%",
//     // overFlow: "scroll",
//   },
// }));

export default function Layout(props) {
  // const classes = useStyles();
  return (
    // <div className={classes.layout}>
    <>
      <Header />
      {props.children}
      {/* <Footer /> */}
    </>
    // </div>
  );
}
