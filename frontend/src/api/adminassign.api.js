import api from "../services/api";

export const getUsers = async () => {
  const response = await api.get("/admin/users");

  return response.data;
};

export const getWorkouts = async () => {
  const response = await api.get("/workout/getall");

  return response.data;
};

export const getDiets = async () => {
  const response = await api.get("/diet-plan/getDiets");

  return response.data;
};

export const assignWorkout = async (data) => {
  const response = await api.post("/workout/assign-workout", data);

  return response.data;
};

export const assignDiet = async (data) => {
  const response = await api.post("/diet-plan/assign", data);

  return response.data;
};
