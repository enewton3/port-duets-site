import { Checkbox, TableCell, TableRow } from "@material-ui/core";
import React from "react";

export default function TableTableRow({ table, isItemSelected, handleSelect }) {
  return (
    <TableRow hover role="checkbox" selected={isItemSelected}>
      <TableCell padding="checkbox">
        <Checkbox
          onClick={(e) => handleSelect(e, table.id)}
          checked={isItemSelected}
        />
      </TableCell>
      <TableCell align="center">{table.table_number}</TableCell>
      <TableCell align="center">{table.table_pin}</TableCell>
      <TableCell align="center">{table.duets_guests.length}</TableCell>
      <TableCell align="center">{table.zoom_link}</TableCell>
    </TableRow>
  );
}
