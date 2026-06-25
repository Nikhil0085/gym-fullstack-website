const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

const adminController = require("../controllers/admin.controller");

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  adminController.getAllUsers,
);

router.get(
  "/stats",
  authMiddleware,
  adminMiddleware,
  adminController.getAdminStats,
);

module.exports = router;
