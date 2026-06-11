const userModel = require("../models/user.model");
const workoutmodel = require("../models/workout.model");
const userWorkoutModel = require('../models/userWorkoutPlan.model')

async function assignWorkout(req, res) {
    try {
          const { userId, workoutId } = req.body;
    
    const user =await userModel.findById(userId);
    if (!user) {
        res.status(404).json({
            message:"user not found"
        })
    }
    const workout = await workoutmodel.findById(workoutId);
    if (!workoutId) {
        res.status(404).json({
            message:"workout is not found"
        })
    }
    const assignedworkout = await userWorkoutModel.create({
      user: userId,
      workoutPlan: workoutId,

      assignedBy: req.user.id,
    });
        return res.status(201).json({
          success: true,
          assignedworkout,
        });
        
        
    } catch (error) {
        
    }
}
async function getMyworkout(req, res) {
    try {
         const plan = await userWorkoutModel
      .findOne({
        user: req.user.id,
      })
        .populate("workoutPlan");
    
    if (!plan) {
        res.status(404).json({
            message:"plan doesnot assigned"
        })
    }
    return res.status(201).json({
        success: true,
        plan
    })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
   

}
module.exports = {
    assignWorkout,
  getMyworkout,
};