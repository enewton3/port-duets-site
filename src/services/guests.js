import api from "./apiconfig";
const localStorage = window.localStorage;

// export const setLoggedIn = async (formData) => {
//   const resp = await api.post("/authguest", {});
//   localStorage.setItem("duets-guest");
//   return resp;
// };

export const checkLoggedIn = async () => {
  const token = localStorage.getItem("guest-token");
  if (token) {
    try {
      const resp = await api.post(`/verifyguest`, { token: token });
      // console.log(resp);
      return resp.data;
    } catch (error) {
      removeToken();
      // console.log(error);
    }
  }
  return null;
};

export const logoutGuest = async (id) => {
  const response = await api.put(`/duets_guests/${id}`, {
    duets_guest: { active: false },
  });
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

export const createAndUpdate = async (formData) => {
  //api call that checks the pin of the submitted pin against the databasea
  const updatedGuest = await api.post("/createandupdate", {
    duets_guest: formData,
  });
  localStorage.setItem("guest-token", updatedGuest.data.token);
  return updatedGuest.data;
};

export const updateGuest = async (id, payload) => {
  const resp = await api.put(`duets_guests/${id}`, { duets_guest: payload });
  return resp.data;
};

export const removeToken = () => {
  localStorage.removeItem("guest-token");
};
