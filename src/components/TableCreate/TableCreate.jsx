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
  input: {},
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
    }
  }, [edit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{edit ? <>Edit</> : <>Add</>} A Table</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            className={classes.input}
            variant="filled"
            label="Table Number"
            name="table_number"
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
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Zoom Link"
            name="zoom_link"
            value={formData.zoom_link}
            onChange={(e) => handleChange(e)}
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            edit
              ? handleEditTable(formData, edit.id)
              : handleCreateTable(formData);
            onClose();
          }}
        >
          {edit ? <>Edit</> : <>Create</>} Table
        </Button>
        <Button variant="outlined" onClick={onClose} autoFocus>
          Nevermind
        </Button>
      </DialogActions>
    </Dialog>
  );
}
