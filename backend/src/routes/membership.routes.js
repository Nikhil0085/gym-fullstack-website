const express = require("express");
const router = express.Router();

const membershipController = require("../controllers/membership.controller");
const authMiddleware= require("../middleware/auth.middleware")
const membershipPurchaseController=require('../controllers/membershipPurchase.controller');
// const membershipModel = require("../models/membership.model");
const adminMiddleware = require("../middleware/admin.middleware");
router.post("/create",authMiddleware,adminMiddleware, membershipController.createPlan); 

router.get("/allplans", membershipController.getAllPlans);
router.post(
  "/purchase",
  authMiddleware,
  membershipPurchaseController.purchaseMembership,
);
router.get("/active", authMiddleware, membershipPurchaseController.getActiveMembership)
router.get("/history",authMiddleware,membershipPurchaseController.getMembershipHistory)

router.get("/:id", membershipController.getPlanById);

router.put("/:id",authMiddleware,adminMiddleware,membershipController.updatePlan);

router.delete("/:id",authMiddleware,adminMiddleware, membershipController.deletePlan);

module.exports = router;
