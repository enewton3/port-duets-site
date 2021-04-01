import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import theme from "./styles/muiTheme";
import {
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import { UserContext } from "./context/UserContext";
import Welcome from "./screens/Welcome/Welcome";
import Layout from "./components/shared/Layout";
import { checkLoggedIn, checkAndUpdate, logoutGuest } from "./services/guests";
import backgroundimg from "./assets/background.png";
import AdminContainer from "./containers/AdminContainer/AdminContainer";
import Table from "./screens/Table/Table";

const useStyles = makeStyles((theme) => ({
  app: {
    background: "rgb(71, 56, 142)",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    width: "100vw",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
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
    const response = await checkAndUpdate(guestData);
    if (response.table) {
      const tableNumber = response.table.table_number;
      setCurrentGuest(response);
      history.push(`/table/${tableNumber}`);
    } else {
      window.alert(response);
    }
  };

  const verifyGuest = () => {
    const resp = checkLoggedIn();
    console.log(resp);
  };

  useEffect(() => {
    verifyGuest();
  }, []);

  const logoutGuest = () => {};

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={currentGuest}>
          <Layout>
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
          </Layout>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
