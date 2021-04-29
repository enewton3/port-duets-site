import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import theme from "./styles/muiTheme";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { UserContext } from "./context/UserContext";
import Welcome from "./screens/Welcome/Welcome";
import { checkLoggedIn, createAndUpdate, logoutGuest } from "./services/guests";
import backgroundimg from "./assets/background.png";
import AdminContainer from "./containers/AdminContainer/AdminContainer";
import Table from "./screens/Table/Table";

const useStyles = makeStyles((theme) => ({
  app: {
    background: "rgb(71, 56, 142)",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    color: "white",
    width: "100vw",
    height: "100vh",
    minHeight: "100vh",
    position: "fixed",
  },
  container: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
  },
}));

function App() {
  const [currentGuest, setCurrentGuest] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  const loginGuest = async (guestData) => {
    // api call to get table_number associated with pin
    // checks to make sure pin is associated with correct last name
    // api call that updates user info and then gets table number associated with the input pin
    const response = await createAndUpdate(guestData);
    if (response.table) {
      const tableNumber = response.table.table_number;
      setCurrentGuest(response);
      history.push(`/table/${tableNumber}`);
    } else {
      window.alert(response);
    }
  };

  const verifyGuest = async () => {
    const resp = await checkLoggedIn();
    setCurrentGuest(resp);
  };

  useEffect(() => {
    verifyGuest();
  }, []);

  useEffect(() => {
    const handleLogout = () => {
      if (currentGuest) {
        logoutGuest(currentGuest.guest.id);
        setCurrentGuest(null);
        console.log("bye");
        // window.alert("triggered");
      }
    };

    window.addEventListener("beforeunload", handleLogout);

    return () => {
      window.removeEventListener("beforeunload", handleLogout);
    };
  }, [currentGuest]);

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          <UserContext.Provider value={currentGuest}>
            <Switch>
              <Route path="/panel">
                <AdminContainer />
              </Route>
              <Route path="/table/:id">
                <Table currentGuest={currentGuest} />
              </Route>
              <Route exact path="/">
                <Welcome
                  setCurrentGuest={setCurrentGuest}
                  loginGuest={loginGuest}
                  verifyGuest={verifyGuest}
                />
              </Route>
            </Switch>
          </UserContext.Provider>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
