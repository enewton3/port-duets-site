import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import { orange } from "@material-ui/core/colors";
// const correct = process.env.REACT_APP_EVENT_PASSWORD;

const useStyles = makeStyles((theme) => ({
  loginform: {
    display: "flex",
    flexFlow: "column wrap",
    width: "50%",
    margin: "0 auto",
  },
  input: {
    color: "white",
    background: "white",
  },
  button: {
    background: orange[500],
    color: "white",
    margin: "2vh auto",
    fontSize: "1rem",
    boxShadow: "2px 2px 5px black",
    "&:hover": {
      backgroundColor: orange[400],
      color: "#FFF",
    },
  },
}));

export default function LoginForm() {
  const [formData, setFormData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === process.env.REACT_APP_EVENT_PASSWORD) {
      history.push("/form");
    } else {
      window.alert("Incorrect password, please try again");
    }
  };

  return (
    <form className={classes.loginform} onSubmit={(e) => handleSubmit(e)}>
      <TextField
        className={classes.input}
        variant="filled"
        label="Password"
        name="password"
        type="password"
        onChange={(e) => handleChange(e)}
        required
      />
      <Button className={classes.button} variant="outlined" type="submit">
        Enter!
      </Button>
    </form>
  );
}
