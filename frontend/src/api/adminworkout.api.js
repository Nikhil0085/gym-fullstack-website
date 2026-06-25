
import api from "../services/api";
export const getAllWorkouts = async () => {
  const response = await api.get("/workout/getall");

  return response.data;
};

export const createWorkout = async (data) => {
  const response = await api.post("/workout/create-workout", data);

  return response.data;
};

export const deleteWorkout = async (id) => {
  const response = await api.delete(`/workout/${id}`);

  return response.data;
};

export const assignWorkout = async (data) => {
  const response = await api.post("/workout/assign-workout", data);

  return response.data;
};
