require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const membershipRoutes = require("./src/routes/membership.routes");
const dietRoutes = require("./src/routes/diet.route");
const workOutRoutes = require("./src/routes/workout.routes");
const razorpayRoutes = require("./src/routes/razorpay.routes");
const adminRoutes = require("./src/routes/admin.routes");
const chatbotRoutes = require("./src/routes/chat.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173", // your React frontend URL
    credentials: true, // required for cookies
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/membership", membershipRoutes);
app.use("/api/diet-plan", dietRoutes);
app.use("/api/workout", workOutRoutes);
app.use("/api/payment", razorpayRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/chatbot", chatbotRoutes);


// console.log("RAZORPAY KEY:", process.env.RAZORPAY_KEY_ID);

app.listen(1000, () => {
  console.log("server is running on port 1000");
});
