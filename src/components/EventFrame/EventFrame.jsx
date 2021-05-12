import React from "react";
import { makeStyles } from "@material-ui/core";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import backgroundimg from "../../assets/framebackground.png";
import donatebutton from "../../assets/donatebutton.png";
import EventButton from "../EventButton/EventButton";

const useStyles = makeStyles((theme) => ({
  goldborder: {
    width: "60vw",
    height: "70vh",
    // width: "100%",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "60vw 70vh",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "space-evenly",

    // "@media (max-width: 1200px)": { width: "80vw", backgroundSize: "80vw 70vh" },
    "@media (max-width: 1024px)": {
      width: "80vw",
      // height: "70vh",
      backgroundSize: "80vw 70vh",
    },
    "@media (max-width: 768px)": {
      width: "90vw",
      height: "60vh",
      backgroundSize: "90vw 60vh",
    },
    "@media (max-width: 480px)": {
      width: "100vw",
      height: "50vh",
      backgroundSize: "100vw 50vh",
    },
  },
  spacer: {
    width: "100%",
    height: "5%",
    // display: "none",
    // "@media (max-width: 1200px)": { display: "block" },
    "@media only screen and (min-device-width: 375px) and (max-device-width: 850px) and (orientation: landscape)":
      { display: "none" },
  },
  container: {
    width: "100%",
    // width: "83%",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    // "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (orientation: landscape)":
    //   { position: "absolute", width: "100vw", height: "100vh" },
  },
  // containerFull: {
  //   position: "absolute",
  //   top: "5vh",
  //   width: "100vw",
  //   height: "95vh",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  vimeoframe: {
    width: "80%",
    height: "73%",
    // aspectRatio: "16/9",
    "@media (max-width: 900px)": { width: "90%" },
    "@media (max-width: 650px)": { width: "80%" },
    "@media (max-width: 450px)": { width: "95%" },
    // "@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)":
    //   { width: "100%", height: "100%" },
  },
  // vimeoframeFull: {
  //   width: "50%",
  //   height: "73%",
  // },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // margin: "2vh 0 2vh 0",
  },
  button: {
    width: "10vw",
    height: "5vh",
    alignSelf: "center",
    justifySelf: "center",
    // marginTop: "2vh",
    // "@media (max-width: 1200px)": { marginTop: "0" },
    "@media (max-width: 1024px)": { width: "20vw" },
    "@media (max-width: 768px)": { width: "25vw" },
    "@media (max-width: 480px)": { width: "30vw" },
  },
}));

export default function EventFrame() {
  const classes = useStyles();

  // console.log(document.fullscreenElement);
  // console.log(window.screen.orientation);
  // console.log(window.navigator.userAgent);

  // const [orientation, setOrientation] = useState("");

  // const width =
  //   orientation === "landscape-primary" || orientation === "landscape-secondary"
  //     ? "100vw"
  //     : "100%";
  // const height =
  //   orientation === "landscape-primary" || orientation === "landscape-secondary"
  //     ? "100vh"
  //     : "100%";

  // console.log(width, height);

  // function handleResize() {
  //   let orientation =
  //     (window.screen.orientation || {}).type ||
  //     window.screen.mozOrientation ||
  //     window.screen.msOrientation;
  //   setOrientation(orientation);
  //   console.log(orientation);
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return function cleanup() {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className={classes.goldborder}>
      <div className={classes.spacer}></div>
      <div
        className={
          // orientation === "landscape-primary" ||
          // orientation === "landscape-secondary"
          //   ? classes.containerFull
          //   :
          classes.container
        }
      >
        <div
          className={
            // orientation === "landscape-primary" ||
            // orientation === "landscape-secondary"
            //   ? classes.vimeoframeFull
            //   :
            classes.vimeoframe
          }
        >
          <VimeoFrame />
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <EventButton
          classTEST={classes.button}
          link="https://giving.massgeneral.org/donate/duets/"
          image={donatebutton}
        />
      </div>
    </div>
  );
}
