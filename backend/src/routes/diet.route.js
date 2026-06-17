const express = require("express");
const router = express.Router();

const dietController = require('../controllers/dietplan.controller')
const userDietcontroller= require('../controllers/userDietPlan.controller');
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware= require('../middleware/admin.middleware')

router.post('/createDiet',authMiddleware,adminMiddleware, dietController.createDiet);
router.get('/getDiets', dietController.getAllDiets);
router.post('/assign', authMiddleware,adminMiddleware, userDietcontroller.assignDietPlan);
router.get('/my-plan', authMiddleware, userDietcontroller.getMyDietPlan);
router.get('/:id', dietController.getDietsbyId);
router.put('/:id',authMiddleware,adminMiddleware, dietController.updateDietPlan);
router.delete('/:id',authMiddleware,adminMiddleware, dietController.deleteDietPlan);
module.exports = router;