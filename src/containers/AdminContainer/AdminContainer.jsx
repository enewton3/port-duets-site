import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AdminLogin from "../../screens/AdminLogin/AdminLogin";
import AdminPanel from "../../screens/AdminPanel/AdminPanel";
import { loginUser, removeToken, verifyUser } from "../../services/auth";

export default function AdminContainer() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

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

  return currentUser ? (
    <AdminPanel handleLogout={handleLogout} />
  ) : (
    <AdminLogin handleLogin={handleLogin} />
  );
}
