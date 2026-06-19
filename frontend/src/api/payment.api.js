import api from "../services/api";

export const createOrder = async (membershipId) => {
  try {
    const response = await api.post("/payment/create-order", {
      membershipId,
    });

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Payment order creation failed",
      }
    );
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await api.post("/razorpay/verify", paymentData);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Payment verification failed",
      }
    );
  }
};
