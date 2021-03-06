import api from "./apiconfig";

export const createTable = async (tableData) => {
  const response = await api.post("/tables", tableData);
  return response.data;
};

export const showTables = async () => {
  const response = await api.get("/tables");
  return response.data;
};

export const editTable = async (formData, id) => {
  const response = await api.put(`/tables/${id}`, formData);
  return response.data;
};

export const deleteTable = async (id) => {
  const response = await api.delete(`/tables/${id}`);
  return response.data;
};

export const deleteAllTables = async () => {
  const response = await api.delete("/alltables");
  return response.data;
};
