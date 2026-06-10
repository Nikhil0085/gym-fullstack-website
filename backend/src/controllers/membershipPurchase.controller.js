const MembershipPurchaseModel = require('../models/membershpPurchase.model');
const Membership = require('../models/membership.model');
const membershipModel = require('../models/membership.model');

async function purchaseMembership(req, res) {
    try {
        
    
        const { membershipId } = req.body;

        const membership = await membershipModel.findById(
            membershipId
        )
        if (!membershipId) {
            return res.status(404).json({
                message: "membership not found"
            })
        }
        const startDate = new Date();
        const endDate = new Date();
        endDate.setDate(
            endDate.getDate() + membership.durationInDays
        )
        const purchase = await MembershipPurchaseModel.create({
            user: req.user.id,
            membership: membership._id,
            startDate,
            endDate
        })
        return res.status(201).json({
            success: true,
            purchase,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {
  purchaseMembership,
};
