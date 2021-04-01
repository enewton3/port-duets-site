import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  input: {},
}));

export default function TableCreate({ onClose, open, handleCreateTable }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    table_pin: "",
    table_number: "",
    zoom_lin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add A Guest</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            className={classes.input}
            variant="filled"
            label="Table Number"
            name="table_number"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Table Pin"
            name="table_pin"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Zoom Link"
            name="zoom_link"
            onChange={(e) => handleChange(e)}
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleCreateTable(formData);
            onClose();
          }}
        >
          Create Table
        </Button>
        <Button variant="outlined" onClick={onClose} autoFocus>
          Nevermind
        </Button>
      </DialogActions>
    </Dialog>
  );
}
