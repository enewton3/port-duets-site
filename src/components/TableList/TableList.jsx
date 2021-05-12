import {
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableHead,
} from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { deleteTable } from "../../services/tables";
import DeleteWarn from "../DeleteWarn/DeleteWarn";
import TableCreate from "../TableCreate/TableCreate";
import TableListHeader from "./TableListHeader";
import TableTableHead from "./TableTableHead";
import TableTableRow from "./TableTableRow";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: "1vh",
  },
  listhead: {},
  actionButtonLink: { textDecoration: "none", color: "black" },
  actionButton: {
    height: "50%",
    margin: "0 1vw 0 1vw",
  },
  counter: {
    background: "black",
    padding: ".5vh 1vw .5vh 1vw",
    borderRadius: "10px",
    color: "white",
  },
  list: {
    padding: 0,
  },
  listItem: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    width: "100%",
    fontFamily: "Helvetica",
  },
  name: {},
  email: {
    justifySelf: "flex-end",
  },
}));

export default function TableList({
  tables,
  setTables,
  fetchTables,
  handleDeleteAllTables,
  handleEditTable,
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [warningOpen, setWarningOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [sortedTables, setSortedTables] = useState([]);

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

  useEffect(() => {
    const sorted = tables.sort((a, b) => a.table_number - b.table_number);
    // console.log(sorted);
    setSortedTables(sorted);
  }, [tables]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tables.map((n) => n.id);
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
    if (selected.length === tables.length) {
      handleDeleteAllTables();
    } else {
      selected.forEach((id) => {
        let newTables = tables.filter((item) => item.id !== id);
        setTables(newTables);
        deleteTable(id);
      });
    }
    setSelected([]);
  };

  return (
    <>
      <TableListHeader
        selected={selected}
        fetchTables={fetchTables}
        tables={tables}
        setWarningOpen={setWarningOpen}
        setEditOpen={setEditOpen}
      />
      <Divider />
      <Table stickyHeader className={classes.list} size="small">
        <TableHead>
          <TableTableHead
            selected={selected}
            tables={tables}
            handleSelectAllClick={handleSelectAllClick}
          />
        </TableHead>
        <TableBody>
          {sortedTables.map((table) => {
            const isItemSelected = isSelected(table.id);

            return (
              <TableTableRow
                table={table}
                isItemSelected={isItemSelected}
                handleSelect={handleSelect}
                key={table.id}
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
      <TableCreate
        open={editOpen}
        onClose={() => {
          setEditOpen(false);
          setSelected([]);
        }}
        handleEditTable={handleEditTable}
        edit={tables.filter((item) => item.id === selected[0])[0]}
      />
    </>
  );
}
