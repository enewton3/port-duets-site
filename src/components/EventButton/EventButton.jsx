import { makeStyles } from "@material-ui/core";
import React from "react";

export default function EventButton(props) {
  const { link, image, classTEST } = props;

  const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
    },
    image: {
      height: "100%",
      width: "100%",
      "&:hover": {
        boxShadow: "0px 0px 15px black",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classTEST}>
      <a
        className={classes.link}
        href={`${link}`}
        rel="noreferrer"
        target="blank"
      >
        <img src={image} alt="event button" className={classes.image} />
      </a>
    </div>
  );
}
