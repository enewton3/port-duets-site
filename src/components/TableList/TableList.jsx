import {
  Button,
  Checkbox,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState, useEffect } from "react";
import { deleteTable } from "../../services/tables";
import { CSVLink } from "react-csv";
import DeleteWarn from "../DeleteWarn/DeleteWarn";

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
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [warningOpen, setWarningOpen] = useState(false);

  useEffect(() => {
    fetchTables();
  }, [fetchTables]);

  useEffect(() => {}, [tables]);

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
      <div className={classes.header}>
        <Typography className={classes.listhead} variant="h5">
          Tables
        </Typography>
        <Tooltip title="Total Tables">
          <Typography className={classes.counter}>{tables.length}</Typography>
        </Tooltip>
        <div className={classes.actions}>
          <Tooltip title="Export CSV File">
            <CSVLink className={classes.actionButtonLink} data={tables}>
              <Button className={classes.actionButton} variant="outlined">
                Export CSV
              </Button>
            </CSVLink>
          </Tooltip>
          <Tooltip title="Refresh Tables">
            <Button
              className={classes.actionButton}
              onClick={fetchTables}
              variant="outlined"
            >
              Refresh
            </Button>
          </Tooltip>

          {selected.length > 0 ? (
            <Tooltip title="Delete Selected">
              <Button
                className={classes.actionButton}
                onClick={() => setWarningOpen(true)}
                variant="outlined"
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          ) : null}
        </div>
      </div>
      <Divider />
      <Table stickyHeader className={classes.list} size="small">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                onClick={(e) => handleSelectAllClick(e)}
                indeterminate={
                  selected.length > 0 && selected.length < tables.length
                }
                checked={tables.length > 0 && selected.length === tables.length}
              />
            </TableCell>
            <TableCell align="center">Table ID</TableCell>
            <TableCell align="center">Table Pin</TableCell>
            <TableCell align="center">Table Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tables.map((table) => {
            const isItemSelected = isSelected(table.id);

            return (
              <TableRow
                key={table.id}
                hover
                role="checkbox"
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    onClick={(e) => handleSelect(e, table.id)}
                    checked={isItemSelected}
                  />
                </TableCell>
                <TableCell align="center">{table.id}</TableCell>
                <TableCell align="center">{table.table_pin}</TableCell>
                <TableCell align="center">{table.table_number}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <DeleteWarn
        open={warningOpen}
        onClose={() => setWarningOpen(false)}
        handleDelete={handleDelete}
      />
    </>
  );
}
