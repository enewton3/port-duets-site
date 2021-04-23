import { Button, makeStyles, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import { CSVLink } from "react-csv";
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

export default function GuestListHeader(props) {
  const { selected, fetchGuestList, guests, setWarningOpen } = props;
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className={classes.listhead} variant="h5">
        Guests
      </Typography>
      <Tooltip title="Total Guests">
        <Typography className={classes.counter}>{guests.length}</Typography>
      </Tooltip>
      <div className={classes.actions}>
        <Tooltip title="Export CSV File">
          <CSVLink className={classes.actionButtonLink} data={guests}>
            <Button className={classes.actionButton} variant="outlined">
              Export CSV
            </Button>
          </CSVLink>
        </Tooltip>
        <Tooltip title="Refresh Guests">
          <Button
            className={classes.actionButton}
            onClick={fetchGuestList}
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
  );
}
