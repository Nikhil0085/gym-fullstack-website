const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const chatController = require("../controllers/chat.controller");

router.post("/chat", authMiddleware, chatController.chatWithAI);

router.get("/history", authMiddleware, chatController.getChatHistory);

module.exports = router;
