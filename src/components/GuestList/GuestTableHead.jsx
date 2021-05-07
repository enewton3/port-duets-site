import {
  Checkbox,
  // makeStyles,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React from "react";

// const useStyles = makeStyles((theme) => ({}));

export default function GuestTableHead(props) {
  const { selected, guests, handleSelectAllClick } = props;
  // const classes = useStyles();
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          onClick={(e) => handleSelectAllClick(e)}
          indeterminate={selected.length > 0 && selected.length < guests.length}
          checked={guests.length > 0 && selected.length === guests.length}
        />
      </TableCell>
      {/* <TableCell align="center">Guest ID</TableCell> */}
      <TableCell align="center">Name</TableCell>
      <TableCell align="center">Email</TableCell>
      <TableCell align="center">Table</TableCell>
      {/* <TableCell align="center">Here?</TableCell> */}
      <TableCell align="center">Created At</TableCell>
      <TableCell align="center">Updated At</TableCell>
    </TableRow>
  );
}
