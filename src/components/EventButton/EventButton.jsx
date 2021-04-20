import { makeStyles } from "@material-ui/core";
import React from "react";

export default function EventButton(props) {
  const { link, image, width, height } = props;

  const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
      height: height,
      width: width,
      "&:hover": {
        boxShadow: "0px 0px 15px black",
      },
    },
    image: { height: "100%", width: "100%" },
  }));

  const classes = useStyles();

  return (
    <a
      className={classes.link}
      href={`${link}`}
      rel="noreferrer"
      target="blank"
    >
      <img src={image} alt="event button" className={classes.image} />
    </a>
  );
}
