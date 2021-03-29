import api from "./apiconfig";
const localStorage = window.localStorage;

export const setLoggedIn = (guestName) => {
  const item = localStorage.setItem("guest3172021", guestName);
  return item;
};

export const checkLoggedIn = () => {
  const item = localStorage.getItem("guest3172021");
  return item;
};

export const createGuest = async (guestData) => {
  const response = await api.post("/guests", guestData);
  return response.data;
};

export const showGuests = async () => {
  const response = await api.get("/guests");
  return response.data;
};

export const deleteGuest = async (id) => {
  const response = await api.delete(`/guests/${id}`);
  return response.data;
};
