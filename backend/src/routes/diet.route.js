const express = require("express");
const router = express.Router();

const dietController = require('../controllers/dietplan.controller')
const userDietcontroller= require('../controllers/userDietPlan.controller');
const authMiddleware = require("../middleware/auth.middleware");

router.post('/createDiet', dietController.createDiet);
router.get('/getDiets', dietController.getAllDiets);
router.post('/assign', authMiddleware, userDietcontroller.assignDietPlan);
router.get('/:id', dietController.getDietsbyId);
router.put('/:id', dietController.updateDietPlan);
router.delete('/:id', dietController.deleteDietPlan);

module.exports = router;