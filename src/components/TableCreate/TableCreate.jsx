import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    // display: "flex",
    // justifyContent: "space-around",
    // alignItems: "baseline",
    // width: "100%",
  },
  input: { width: "100%", marginTop: "1vh" },
}));

export default function TableCreate({
  onClose,
  open,
  handleCreateTable,
  handleEditTable,
  edit,
}) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    table_pin: "",
    table_number: "",
    zoom_link: "",
  });

  useEffect(() => {
    if (edit) {
      setFormData({
        table_pin: edit.table_pin,
        table_number: edit.table_number,
        zoom_link: edit.zoom_link,
      });
    } else {
      setFormData({
        table_pin: "",
        table_number: "",
        zoom_link: "",
      });
    }
  }, [edit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    edit
      ? await handleEditTable(formData, edit.id)
      : await handleCreateTable(formData);
    onClose();
  };

  const validatePin =
    String(formData.table_pin).length === 4 ||
    String(formData.table_pin).length === 0
      ? true
      : false;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{edit ? <>Edit</> : <>Add</>} A Table</DialogTitle>
      <DialogContent>
        <form className={classes.form}>
          <TextField
            className={classes.input}
            variant="filled"
            label="Table Number"
            name="table_number"
            helperText="Must be unique"
            value={formData.table_number}
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Table Pin"
            name="table_pin"
            value={formData.table_pin}
            error={!validatePin}
            helperText="Must be 4 digits, and unique"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Zoom Link"
            name="zoom_link"
            helperText="Must be full link, including https://"
            value={formData.zoom_link}
            onChange={(e) => handleChange(e)}
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>
          {edit ? <>Edit</> : <>Create</>} Table
        </Button>
        <Button variant="outlined" onClick={onClose} autoFocus>
          Nevermind
        </Button>
      </DialogActions>
    </Dialog>
  );
}
