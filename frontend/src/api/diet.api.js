
import api from "../services/api";

export const getMyDietPlan = async () => {
  const response = await api.get("/diet-plan/my-plan");

  return response.data;
};
