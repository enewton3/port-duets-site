//REACT
import React, { useState, useEffect } from "react";

//MUI
import {
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableHead,
} from "@material-ui/core";

//services
import { deleteGuest } from "../../services/guests";

//Components
import DeleteWarn from "../DeleteWarn/DeleteWarn";
import GuestRow from "./GuestRow";
import GuestListHeader from "./GuestListHeader";
import GuestTableHead from "./GuestTableHead";

//MUI styles
const useStyles = makeStyles(() => ({
  root: { width: "100%" },
  list: {
    padding: 0,
    overflowX: "scroll",
  },
}));

export default function GuestList(props) {
  const { guests, setGuests, fetchGuestList, handleDeleteAll } = props;
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [warningOpen, setWarningOpen] = useState(false);

  useEffect(() => {
    fetchGuestList();
  }, [fetchGuestList]);

  useEffect(() => {}, [guests]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = guests.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleDelete = () => {
    if (selected.length === guests.length) {
      handleDeleteAll();
    } else {
      selected.forEach((id) => {
        if (deleteGuest(id)) {
          setGuests((prev) => prev.filter((item) => item.id !== id));
        }
      });
    }
    setSelected([]);
  };

  return (
    <div className={classes.root}>
      <GuestListHeader
        selected={selected}
        fetchGuestList={fetchGuestList}
        guests={guests}
        setWarningOpen={setWarningOpen}
      />
      <Divider />
      <Table stickyHeader className={classes.list} size="small">
        <TableHead>
          <GuestTableHead
            selected={selected}
            guests={guests}
            handleSelectAllClick={handleSelectAllClick}
          />
        </TableHead>
        <TableBody>
          {guests.map((guest) => {
            const isItemSelected = isSelected(guest.id);
            return (
              <GuestRow
                guest={guest}
                isItemSelected={isItemSelected}
                handleSelect={handleSelect}
                key={guest.id}
              />
            );
          })}
        </TableBody>
      </Table>
      <DeleteWarn
        open={warningOpen}
        onClose={() => setWarningOpen(false)}
        handleDelete={handleDelete}
      />
    </div>
  );
}
