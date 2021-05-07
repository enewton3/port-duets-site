import React from "react";
import { Button, makeStyles, Tooltip, Typography } from "@material-ui/core";
import { CSVLink } from "react-csv";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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
}));

export default function TableListHeader(props) {
  const { selected, fetchTables, tables, setWarningOpen, setEditOpen } = props;
  const classes = useStyles();

  return (
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

        {selected.length === 1 ? (
          <Tooltip title="Edit Selected">
            <Button
              className={classes.actionButton}
              onClick={() => setEditOpen(true)}
              variant="outlined"
            >
              <EditIcon />
            </Button>
          </Tooltip>
        ) : null}
      </div>
    </div>
  );
}
