import api from "../services/api";

export const getMembershipHistory = async () => {
  const response = await api.get("/membership/history");

  return response.data;
};
