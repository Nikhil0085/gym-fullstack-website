import api from "../services/api";

export const getAdminStats = async () => {
  const response = await api.get("/admin/stats");

  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/admin/users");

  return response.data;
};
