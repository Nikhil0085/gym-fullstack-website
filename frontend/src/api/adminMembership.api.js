import api from "../services/api";

export const getAllMemberships = async () => {
  const response = await api.get("/membership/allplans");

  return response.data;
};

export const createMembership = async (data) => {
  const response = await api.post("/membership/create", data);

  return response.data;
};

export const updateMembership = async (id, data) => {
  const response = await api.put(`/membership/${id}`, data);

  return response.data;
};

export const deleteMembership = async (id) => {
  const response = await api.delete(`/membership/${id}`);

  return response.data;
};
