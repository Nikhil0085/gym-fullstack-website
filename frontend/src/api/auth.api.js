import api from "../services/api";

export const signupUser = (data) => {
  return api.post("/auth/signup", data);
};

export const verifyOTP = (data) => {
  return api.post("/auth/verify", data);
};

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};
