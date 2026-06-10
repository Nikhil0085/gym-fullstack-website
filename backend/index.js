require("dotenv").config();
const express = require("express");
const connectDB = require('./src/config/db')
const authRoutes = require('./src/routes/auth.routes')
const membershipRoutes= require('./src/routes/membership.routes')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
connectDB();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/membership", membershipRoutes);


app.use(cors());

app.use(cookieParser());
app.listen(1000, () => {
  console.log("server is running on port 1000");
});
