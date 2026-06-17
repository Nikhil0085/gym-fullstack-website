const express= require('express')
const router = express.Router();
const authMiddleware= require('../middleware/auth.middleware')
const workoutController = require('../controllers/workoutPlan.controller')
const userWrokoutController = require('../controllers/userWorkout.controller')
const adminMiddleware=require('../middleware/admin.middleware')

router.post('/create-workout',authMiddleware,adminMiddleware, workoutController.createWorkout);
router.get('/getall', workoutController.getAllworkout);
router.post('/assign-workout', authMiddleware,adminMiddleware, userWrokoutController.assignWorkout);
router.get('/get-workout',authMiddleware,userWrokoutController.getMyworkout)
router.get('/:id', workoutController.getWorkoutById);
router.put('/:id',authMiddleware,adminMiddleware, workoutController.upateWorkoutplan);
router.delete('/:id',authMiddleware,adminMiddleware, workoutController.deleteWorkoutPlan);
module.exports = router;