const membershipModel = require("../models/membership.model");

async function createPlan(req, res) {
  try {
    const plan = await membershipModel.create(req.body);

    return res.status(201).json({
      success: true,
      plan,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
async function getAllPlans(req, res) {
  try {
    const plans = await membershipModel.find();

    return res.status(200).json({
      success: true,
      count: plans.length,
      plans,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function getPlanById(req, res) {
  try {
    const { id } = req.params;

    const plan = await membershipModel.findById(id);
    if (!plan) {
      return res.status(404).json({
        message: "plan not found",
      });
    }
    return res.status(200).json({
      success: true,
      plan,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
async function updatePlan(req, res) {
  try {
    const { id } = req.params;
    const updatePlan = await membershipModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatePlan) {
      return res.status(404).json({
        message: "plan not found",
      });
    }
    return res.status(200).json({
      success: true,
      updatePlan,
    });
  } catch (errpr) {
  return  res.status(500).json({
      message: error.mmessage,
    });
  }
}
async function deletePlan(req, res) {
  try {
    const { id } = req.params;

    const plan = await membershipModel.findByIdAndDelete(id);

    if (!plan) {
      return res.status(404).json({
        message: "Plan not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Plan deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
module.exports = {
  createPlan,
  getAllPlans,
  updatePlan,
  deletePlan,
  getPlanById,
};