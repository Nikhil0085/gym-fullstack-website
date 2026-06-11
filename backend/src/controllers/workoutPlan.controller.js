const workoutPlanmodel = require("../models/workout.model")


async function createWorkout(req, res) {
    try {
        const workOut =await workoutPlanmodel.create(req.body);
        return res.status(201).json({
            success: true,
            workOut
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
        
    }
}
async function getAllworkout(req, res) {
    try {
        const workouts =await workoutPlanmodel.find();
        return res.status(201).json({
            success: true,
            workouts
            
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

async function getWorkoutById(req, res) {
    try {
        const { id } = req.params;
        const workOut =await workoutPlanmodel.findById(id);
        if (!workOut) {
            res.status(404).json({
                message:"id not found"
            })
        }
        return res.status(201).json({
            success: true,
            workOut,
        })

    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
        
    }
}
async function upateWorkoutplan(req, res) {
    try {
         const { id } = req.params;
    const updateWorkOut = await workoutPlanmodel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateWorkOut) {
        res.status(404).json({
            message:"workout not found"
        })
    }
    return res.status(201).json({
        success: true,
       updateWorkOut
    })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
   
}

async function deleteWorkoutPlan(req, res) {
    try {
        const { id } = req.params;
        const deleteplan =await workoutPlanmodel.findByIdAndDelete(id);
        if (!deleteplan) {
            res.status(404).json({
                message:"plan is not found"
            })
        }
        return res.status(201).json({
            success: true,
            message:"diet plan deleted successfully"

        })

    
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })

        
    }
}
module.exports = {
  createWorkout,
  getAllworkout,
  getWorkoutById,
  upateWorkoutplan,
  deleteWorkoutPlan,
};