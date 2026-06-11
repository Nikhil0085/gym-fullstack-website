const express= require('express')
const router = express.Router();
const authMiddleware= require('../middleware/auth.middleware')
const workoutController = require('../controllers/workoutPlan.controller')
const userWrokoutController= require('../controllers/userWorkout.controller')

router.post('/create-workout', workoutController.createWorkout);
router.get('/getall', workoutController.getAllworkout);
router.post('/assign-workout', authMiddleware, userWrokoutController.assignWorkout);
router.get('/get-workout',authMiddleware,userWrokoutController.getMyworkout)
router.get('/:id', workoutController.getWorkoutById);
router.put('/:id', workoutController.upateWorkoutplan);
router.delete('/:id', workoutController.deleteWorkoutPlan);

module.exports = router;