import api from "./apiconfig";
const localStorage = window.localStorage;

export const setLoggedIn = async (formData) => {
  const resp = await api.post("/authguest", {});
  localStorage.setItem("duets-guest");
};

export const checkLoggedIn = async () => {
  const token = localStorage.getItem("guest-token");
  if (token) {
    const resp = await api.get("/verifyguest", { token: token });
    return resp.data;
  }
  return null;
};

export const logoutGuest = async (id) => {
  const response = await api.put(`/duets_guests/${id}`, {
    duets_guest: { active: false },
  });
  localStorage.removeItem("guest-token");
  return response;
};

export const createGuest = async (guestData) => {
  const response = await api.post("/duets_guests", guestData);
  return response.data;
};

export const showGuests = async () => {
  const response = await api.get("/duets_guests");
  return response.data;
};

export const deleteGuest = async (id) => {
  const response = await api.delete(`/duets_guests/${id}`);
  return response.data;
};

export const deleteAllGuests = async () => {
  const response = await api.delete("/allduetsguests");
  return response.data;
};

export const checkAndUpdate = async (formData) => {
  //api call that checks the pin of the submitted pin against the databasea
  const updatedGuest = await api.put("/checkandupdate", {
    duets_guest: formData,
  });
  localStorage.setItem("guest-token", updatedGuest.data.token);
  return {
    guest: updatedGuest.data.guest,
    table: updatedGuest.data.table,
  };
};
