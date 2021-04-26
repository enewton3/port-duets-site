import { Checkbox, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { processDateTime } from "../../services/datestimes";

export default function GuestRow({ guest, isItemSelected, handleSelect }) {
  const prettyCreated = processDateTime(guest.created_at);
  const prettyUpdated = processDateTime(guest.updated_at);

  return (
    <TableRow key={guest.id} hover role="checkbox" selected={isItemSelected}>
      <TableCell padding="checkbox">
        <Checkbox
          onClick={(e) => handleSelect(e, guest.id)}
          checked={isItemSelected}
        />
      </TableCell>
      {/* <TableCell align="center">{guest.id}</TableCell> */}
      <TableCell align="center">
        {guest.firstname} {guest.lastname}
      </TableCell>
      <TableCell align="center">{guest.email}</TableCell>
      <TableCell align="center">{guest.table?.table_number}</TableCell>
      <TableCell align="center">{guest.active ? "Yes" : "No"}</TableCell>
      <TableCell align="center">{prettyCreated}</TableCell>
      <TableCell align="center">{prettyUpdated}</TableCell>
    </TableRow>
  );
}
