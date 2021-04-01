import {
  AppBar,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import GuestCreate from "../../components/GuestCreate/GuestCreate";
import GuestList from "../../components/GuestList/GuestList";
import TableCreate from "../../components/TableCreate/TableCreate";
import TableList from "../../components/TableList/TableList";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import { createTable } from "../../services/tables";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh 1vw 1vh 1vw",
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  logoutButton: {
    color: "white",
    backgroundColor: theme.palette.secondary.light,
    borderColor: "white",
  },
  panelBody: {
    paddingTop: "5vh",
    display: "flex",
    flexFlow: "row wrap",
    // alignItems: "baseline",
    justifyContent: "space-around",
    "@media (max-width: 800px)": {
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "8vh",
    },
  },
  container: { display: "flex", flexFlow: "column wrap" },
  paper: {
    width: "47vw",
    padding: "2vh 1vw 2vh 1vw",
    maxHeight: "80vh",
    overflowY: "scroll",
    marginTop: "2vh",
    "@media (max-width: 800px)": {
      width: "80vw",
      marginTop: "2vh",
    },
  },
}));

export default function AdminPanel(props) {
  const {
    handleLogout,
    fetchGuestList,
    guests,
    setGuests,
    handleCreate,
    handleDeleteAll,
    tables,
    setTables,
    handleDeleteAllTables,
    fetchTables,
  } = props;
  const [createOpen, setCreateOpen] = useState(false);
  const [createTableOpen, setCreateTableOpen] = useState(false);
  const classes = useStyles();

  const handleCreateTable = async (formData) => {
    const resp = await createTable(formData);
    return resp;
  };

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Link to="/" className={classes.link}>
          <Button className={classes.link}>
            <Typography>Duets Event Admin Panel</Typography>
          </Button>
        </Link>
        <Button
          className={classes.logoutButton}
          variant="outlined"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </AppBar>

      <div className={classes.panelBody}>
        <Paper className={classes.paper}>
          <VimeoFrame />
        </Paper>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <GuestList
              fetchGuestList={fetchGuestList}
              guests={guests}
              setGuests={setGuests}
              handleDeleteAll={handleDeleteAll}
            />
          </Paper>
          <Button
            onClick={() => {
              setCreateOpen(true);
            }}
            variant="outlined"
          >
            Create A New Guest
          </Button>
          <GuestCreate
            onClose={() => {
              setCreateOpen(false);
            }}
            open={createOpen}
            handleCreate={handleCreate}
          />
        </div>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <TableList
              tables={tables}
              setTables={setTables}
              handleDeleteAllTables={handleDeleteAllTables}
              fetchTables={fetchTables}
            />
          </Paper>
          <Button
            onClick={() => {
              setCreateTableOpen(true);
            }}
            variant="outlined"
          >
            Add a Table
          </Button>
          <TableCreate
            onClose={() => setCreateTableOpen(false)}
            open={createTableOpen}
            handleCreateTable={handleCreateTable}
          />
        </div>
      </div>
    </div>
  );
}
