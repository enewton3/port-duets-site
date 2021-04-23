import { Button, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import AdminNav from "../../components/AdminNav/AdminNav";
import Chat from "../../components/Chat/Chat";
import GuestCreate from "../../components/GuestCreate/GuestCreate";
import GuestList from "../../components/GuestList/GuestList";
import TableCreate from "../../components/TableCreate/TableCreate";
import TableList from "../../components/TableList/TableList";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import { createTable } from "../../services/tables";

const useStyles = makeStyles((theme) => ({
  panelBody: {
    paddingTop: "5vh",
    display: "flex",
    flexFlow: "row wrap",
    // alignItems: "baseline",
    justifyContent: "space-around",
    justifySelf: "center",
    alignSelf: "center",
    "@media (max-width: 800px)": {
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "8vh",
    },
  },
  container: { display: "flex", flexFlow: "column wrap" },
  vimeopaper: {
    width: "47vw",
    padding: "2vh 1vw 2vh 1vw",
    maxHeight: "80vh",
    overflowY: "scroll",
    marginTop: "2vh",
    "@media (max-width: 800px)": {
      width: "90vw",
      marginTop: "2vh",
    },
  },
  paper: {
    width: "47vw",
    padding: "2vh 1vw 2vh 1vw",
    maxHeight: "60vh",
    overflowY: "scroll",
    marginTop: "2vh",
    "@media (max-width: 800px)": {
      width: "90vw",
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
    handleEditTable,
    fetchTables,
    currentUser,
  } = props;
  const [createOpen, setCreateOpen] = useState(false);
  const [createTableOpen, setCreateTableOpen] = useState(false);
  // const [messages, setMessages] = useState([]);
  const classes = useStyles();

  const handleCreateTable = async (formData) => {
    const resp = await createTable(formData);
    return resp;
  };

  return (
    <div>
      <AdminNav handleLogout={handleLogout} />

      <div className={classes.panelBody}>
        <Paper className={classes.vimeopaper}>
          <VimeoFrame />
        </Paper>
        <Paper className={classes.paper}>
          <Chat
            currentUser={currentUser}
            // messages={messages}
            // setMessages={setMessages}
          />
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
              handleEditTable={handleEditTable}
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
