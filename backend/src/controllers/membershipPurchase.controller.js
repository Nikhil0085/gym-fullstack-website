const MembershipPurchaseModel = require("../models/membershipPurchase.model");
const Membership = require("../models/membership.model");



async function purchaseMembership(req, res) {
  try {
    const { membershipId } = req.body;

    const membership = await Membership.findById(membershipId);
    if (!membership) {
      return res.status(404).json({
        message: "membership not found",
      });
    }
    const existingMembership = await MembershipPurchaseModel.findOne({
      user: req.user.id,
      status: "ACTIVE",
    });

    if (existingMembership) {
      return res.status(400).json({
        message: "You already have an active membership",
      });
    }
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + membership.durationInDays);
    const purchase = await MembershipPurchaseModel.create({
      user: req.user.id,
      membership: membership._id,
      startDate,
      endDate,
    });
    return res.status(201).json({
      success: true,
      purchase,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
async function getActiveMembership(req, res) {
  try {
    const membership = await MembershipPurchaseModel.findOne({
      user: req.user.id,
      status: "ACTIVE",
    }).populate("membership", "name price durationInDays features");

    console.log("ACTIVE MEMBERSHIP:", membership);

    if (!membership) {
      return res.status(200).json({
        success: true,
        hasMembership: false,
        message: "No active membership found",
      });
    }

    if (membership.endDate < new Date()) {
      membership.status = "EXPIRED";

      await membership.save();

      return res.status(200).json({
        success: true,
        hasMembership: false,
        message: "Membership expired",
      });
    }

    const remainingDays = Math.ceil(
      (membership.endDate - new Date()) / (1000 * 60 * 60 * 24),
    );

    return res.status(200).json({
      success: true,

      hasMembership: true,

      remainingDays,

      membership: {
        planName: membership.membership.name,
        price: membership.membership.price,
        features: membership.membership.features,
        startDate: membership.startDate,
        endDate: membership.endDate,
        status: membership.status,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error.message,
    });
  }
}

async function getMembershipHistory(req, res) {
  try {
    const history = await MembershipPurchaseModel.find({
      user: req.user.id,
    })
      .populate("membership", "name price durationInDays features")
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  purchaseMembership,
  getActiveMembership,
  getMembershipHistory,
};
