import api from "../services/api";

export const getActiveMembership = async () => {
  const response = await api.get("/membership/active");

  return response.data;
};
