import { Button, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import AdminNav from "../../components/AdminNav/AdminNav";
// import AdminChat from "../../components/Chat/AdminChat";
import GuestCreate from "../../components/GuestCreate/GuestCreate";
import GuestList from "../../components/GuestList/GuestList";
import TableCreate from "../../components/TableCreate/TableCreate";
import TableList from "../../components/TableList/TableList";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import { createTable } from "../../services/tables";

const useStyles = makeStyles((theme) => ({
  panelBody: {
    paddingTop: "7vh",
    display: "flex",
    flexFlow: "row wrap",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2vh 1vw 2vh 1vw",
    minHeight: "50vh",
    maxHeight: "80vh",
    overflowY: "scroll",
    // scrollbarColor: "transparent transparent",
    marginTop: "2vh",
    "@media (max-width: 800px)": {
      width: "90vw",
      marginTop: "2vh",
    },
  },
  vimeoFrame: {
    aspectRatio: "16/9",
    width: "100%",
  },
  paper: {
    width: "47vw",
    padding: "2vh 1vw 2vh 1vw",
    minHeight: "50vh",
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
  const firstname = currentUser?.firstname.toLowerCase();

  const admin =
    firstname === "evyn" || firstname === "kyle" || firstname === "steve";

  return (
    <div>
      <AdminNav handleLogout={handleLogout} currentUser={currentUser} />

      <div className={classes.panelBody}>
        <Paper className={classes.vimeopaper}>
          <div className={classes.vimeoFrame}>
            <VimeoFrame />
          </div>
        </Paper>
        {/* <Paper className={classes.paper}> */}
        {/* <PubnubChatWrapper username={chatUsername}> */}
        {/* <AdminChat currentUser={currentUser} /> */}
        {/* </PubnubChatWrapper> */}
        {/* </Paper> */}
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <GuestList
              fetchGuestList={fetchGuestList}
              guests={guests}
              setGuests={setGuests}
              handleDeleteAll={handleDeleteAll}
            />
          </Paper>
          {admin ? (
            <Button
              onClick={() => {
                setCreateOpen(true);
              }}
              variant="outlined"
            >
              Create A New Guest
            </Button>
          ) : null}
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
