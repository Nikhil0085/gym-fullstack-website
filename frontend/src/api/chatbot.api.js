import api from "../services/api";

export const sendMessage = async (message) => {
  const response = await api.post("/chatbot/chat", {
    message,
  });

  return response.data;
};
export const getChatHistory = async () => {
  const response = await api.get("/chatbot/history");

  return response.data;
};