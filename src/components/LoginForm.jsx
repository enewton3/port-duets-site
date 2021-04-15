import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loginform: {
    display: "flex",
    flexFlow: "column wrap",
    width: "50%",
    height: "45vh",
    justifyContent: "space-between",
    "@media (max-width: 600px)": { width: "80%" },
    "@media (max-width: 400px)": { width: "100%" },
  },
  names: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  firstNameInput: {
    color: "white",
    background: "white",
    width: "50%",
  },
  lastNameInput: {
    color: "white",
    background: "white",
    width: "50%",
    marginLeft: "1vw",
  },
  input: {
    color: "white",
    background: "white",
  },
  button: {
    background: theme.palette.primary.main,
    color: "white",
    margin: "2vh auto",
    fontSize: "1rem",
    boxShadow: "2px 2px 5px black",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "#FFF",
    },
  },
}));

export default function LoginForm({ loginGuest }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    table_pin: "",
  });
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginGuest(formData);
  };

  return (
    <form className={classes.loginform} onSubmit={(e) => handleSubmit(e)}>
      <div className={classes.names}>
        <TextField
          className={classes.firstNameInput}
          variant="filled"
          label="First Name"
          name="firstname"
          onChange={(e) => handleChange(e)}
          required
        />
        <TextField
          className={classes.lastNameInput}
          variant="filled"
          label="Last Name"
          name="lastname"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <TextField
        className={classes.input}
        variant="filled"
        label="Email"
        name="email"
        type="email"
        onChange={(e) => handleChange(e)}
        required
      />
      <TextField
        className={classes.input}
        variant="filled"
        label="Table Pin"
        name="table_pin"
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
