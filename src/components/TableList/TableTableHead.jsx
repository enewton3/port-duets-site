import { Checkbox, TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function TableTableHead(props) {
  const { selected, tables, handleSelectAllClick } = props;
  return (
    // <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          onClick={(e) => handleSelectAllClick(e)}
          indeterminate={selected.length > 0 && selected.length < tables.length}
          checked={tables.length > 0 && selected.length === tables.length}
        />
      </TableCell>
      <TableCell align="center">Table Number</TableCell>
      <TableCell align="center">Table Pin</TableCell>
      <TableCell align="center">Guests</TableCell>
      <TableCell align="center">Zoom Link</TableCell>
    </TableRow>
    // </TableHead>
  );
}
