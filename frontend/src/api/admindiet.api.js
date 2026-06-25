
import api from "../services/api";
export const getAllDiets = async () => {
  const response = await api.get("/diet-plan/getDiets");

  return response.data;
};

export const createDiet = async (data) => {
  const response = await api.post("/diet-plan/createDiet", data);

  return response.data;
};

export const deleteDiet = async (id) => {
  const response = await api.delete(`/diet-plan/${id}`);

  return response.data;
};
