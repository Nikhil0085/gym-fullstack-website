import api from "../services/api";

export const getMyWorkout = async () => {
  const response = await api.get("/workout/get-workout");

  return response.data;
};
