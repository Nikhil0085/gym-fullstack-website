const userModel = require('../models/user.model')
const dietplanModel = require('../models/dietplan.model');
const userDietPlanModel = require('../models/userDietPlan.model');


async function assignDietPlan(req, res) {
    try {
        const { userId, dietPlanId } = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
        res.status(404).json({
            message:"User not found"
        })
    }
    const dietplan = await dietplanModel.findById(dietPlanId);
    if (!dietPlanId) {
        res.status(404).json({
            message:"diet plan not found"
        })
    }
    const assignedPlan = await userDietPlanModel.create({
        user: userId,
        dietPlan: dietPlanId,
        
        assignedBy:req.user.id,
    })
    return res.status(201).json({
        success: true,
        assignedPlan
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })

        
    }
    
}
async function getMydietplan(req, res) {
    
}
module.exports = {
  assignDietPlan,
};