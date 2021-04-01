import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import AdminLogin from "../../screens/AdminLogin/AdminLogin";
import AdminPanel from "../../screens/AdminPanel/AdminPanel";
import { loginUser, removeToken, verifyUser } from "../../services/auth";
import {
  showGuests,
  createGuest,
  deleteAllGuests,
} from "../../services/guests";
import { showTables } from "../../services/tables";

export default function AdminContainer() {
  const [currentUser, setCurrentUser] = useState(null);
  const [guests, setGuests] = useState([]);
  const [tables, setTables] = useState([]);
  const history = useHistory();

  //verify for auth
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  //guest list api calls and functions
  const fetchGuestList = useCallback(async () => {
    const resp = await showGuests();
    setGuests(resp);
  }, []);

  const handleCreate = async (formData) => {
    const resp = await createGuest(formData);
    setGuests((prev) => [...prev, resp]);
    return resp;
  };

  const handleDeleteAll = async () => {
    const resp = await deleteAllGuests();
    setGuests([]);
    return resp;
  };

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/panel");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  //tables list functions and api calls

  const fetchTables = useCallback(async () => {
    const resp = await showTables();
    setTables(resp);
  }, []);

  const handleDeleteAllTables = () => {};

  return currentUser ? (
    <AdminPanel
      handleLogout={handleLogout}
      fetchGuestList={fetchGuestList}
      guests={guests}
      setGuests={setGuests}
      handleCreate={handleCreate}
      handleDeleteAll={handleDeleteAll}
      tables={tables}
      setTables={setTables}
      handleDeleteAllTables={handleDeleteAllTables}
      fetchTables={fetchTables}
    />
  ) : (
    <AdminLogin handleLogin={handleLogin} />
  );
}
