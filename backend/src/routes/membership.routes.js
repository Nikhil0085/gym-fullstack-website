const express = require("express");

const router = express.Router();

const membershipController = require("../controllers/membership.controller");
const membershipPurchaseController = require("../controllers/membershipPurchase.controller");

const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

router.post(
  "/create",
  authMiddleware,
  adminMiddleware,
  membershipController.createPlan,
);

router.get("/allplans", membershipController.getAllPlans);

router.get(
  "/active",
  authMiddleware,
  (req, res, next) => {
    console.log("ACTIVE ROUTE HIT");
    next();
  },
  membershipPurchaseController.getActiveMembership,
);

router.get(
  "/history",
  authMiddleware,
  membershipPurchaseController.getMembershipHistory,
);

router.get("/:id", membershipController.getPlanById);

router.post(
  "/purchase",
  authMiddleware,
  membershipPurchaseController.purchaseMembership,
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  membershipController.updatePlan,
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  membershipController.deletePlan,
);

module.exports = router;
