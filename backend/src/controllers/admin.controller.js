const User = require("../models/user.model");
const Membership = require("../models/membership.model");
const Workout = require("../models/workout.model");
const Diet = require("../models/dietplan.model");
const MembershipPurchase = require("../models/membershipPurchase.model");

async function getAdminStats(req, res) {
  try {
    const users = await User.countDocuments();

    const memberships = await Membership.countDocuments();

    const workouts = await Workout.countDocuments();

    const diets = await Diet.countDocuments();

    const recentUsers = await User.find()
      .select("-password")
      .sort({ createdAt: -1 })
      .limit(5);

    const recentPurchases = await MembershipPurchase.find()
      .populate("user", "name email")
      .populate("membership", "name price")
      .sort({ createdAt: -1 })
      .limit(5);

    return res.status(200).json({
      success: true,

      stats: {
        users,
        memberships,
        workouts,
        diets,
      },

      recentUsers,

      recentPurchases,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

}
 async function getAllUsers(req, res) {
   try {
     const users = await User.find().select("-password");

     return res.status(200).json({
       success: true,
       users,
     });
   } catch (error) {
     return res.status(500).json({
       message: error.message,
     });
   }
 }

module.exports = {
  getAdminStats,
  getAllUsers,
};
