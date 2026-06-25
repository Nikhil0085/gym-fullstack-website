const dietplanModel = require('../models/dietplan.model')

const createDiet = async function (req, res) {
    try {
         const diet =await dietplanModel.create(req.body);
    return res.status(201).json({
        success: true,
        diet
    })
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
    
}
async function getAllDiets(req, res) {
    try {
        const diets = await dietplanModel.find();

        return res.status(200).json({
            success: true,
            count: diets.length,
            diets
        })


    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
async function getDietsbyId(req, res) {
    try {
         const { id } = req.params;
         const diet = await dietplanModel.findById(id);
         if (!diet) {
           res.status(404).json({
             message: "diet not found",
           });
         }
         return res.status(201).json({
           success: true,
           diet,
         });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
    
}

async function updateDietPlan(req, res) {
    try {
         const { id } = req.params;
    const updateDiet = await dietplanModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateDiet) {
        res.status(404).json({
            message:"diet plan is not found"
        })
    }
    return res.status(200).json({
        success: true,
        updateDiet,
    })
    } catch (error) {
        message:error.message
    }
}

async function deleteDietPlan(req, res) {
  try {
    const { id } = req.params;

    const diet = await dietplanModel.findByIdAndDelete(id);

    if (!diet) {
      return res.status(404).json({
        message: "Diet plan not found",
      });
    }

    return res.status(200).json({
      success: true,

      message: "Diet plan deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  createDiet,
  getAllDiets,
  getDietsbyId,
  updateDietPlan,
  deleteDietPlan,
};


