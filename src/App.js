import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import theme from "./styles/muiTheme";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { UserContext } from "./context/UserContext";
import Welcome from "./screens/Welcome/Welcome";
import Event from "./screens/Event/Event";
import Form from "./screens/Form/Form";
import Layout from "./components/shared/Layout";
import { checkLoggedIn } from "./services/guests";
import backgroundimg from "./assets/LandingPageBackground.png";
import AdminContainer from "./containers/AdminContainer/AdminContainer";
const useStyles = makeStyles((theme) => ({
  app: {
    background: "rgb(55,123,34)",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    width: "100vw",
    height: "100%",
    minHeight: "100vh",
  },
}));

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const guest = checkLoggedIn();
    setCurrentUser(guest);
  }, []);

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={currentUser}>
          <Layout>
            <Switch>
              <Route path="/panel">
                <AdminContainer />
              </Route>
              <Route path="/form">
                <Form
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              </Route>
              <Route path="/event">
                <Event currentUser={currentUser} />
              </Route>
              <Route exact path="/">
                <Welcome currentUser={currentUser} />
              </Route>
            </Switch>
          </Layout>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
