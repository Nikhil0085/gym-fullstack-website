import api from "../services/api";

export const getAllMembershipPlans = async () => {
  try {
    const response = await api.get("/membership/allplans");

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Something went wrong",
      }
    );
  }
};
export const getMembershipById = async (id) => {
  try {
    const response = await api.get(`/membership/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Something went wrong",
      }
    );
  }
};
