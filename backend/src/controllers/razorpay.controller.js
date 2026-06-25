const razorpay = require("../config/razorpay");

const crypto = require("crypto");

const Membership = require("../models/membership.model");

const MembershipPurchase = require("../models/membershipPurchase.model");

const RazorpayPayment = require("../models/razorpay.model");

async function createOrder(req, res) {
  try {
    const { membershipId } = req.body;

    const membership = await Membership.findById(membershipId);

    if (!membership) {
      return res.status(404).json({
        message: "Membership not found",
      });
    }

    const options = {
  amount: membership.price * 100,
  currency:"INR",
  receipt:`receipt_${Date.now()}`
};
    const order = await razorpay.orders.create(options);

    await RazorpayPayment.create({
      user: req.user.id,

      membership: membershipId,

      razorpayOrderId: order.id,

      amount: membership.price,

      status: "CREATED",
    });

    return res.status(200).json({
      success: true,

      order,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error.message,
    });
  }
}

async function verifyPayment(req, res) {
  try {
    const {
      razorpay_order_id,

      razorpay_payment_id,

      razorpay_signature,

      membershipId,
    } = req.body;

    const generatedSignature = crypto

      .createHmac(
        "sha256",

        process.env.RAZORPAY_KEY_SECRET,
      )

      .update(razorpay_order_id + "|" + razorpay_payment_id)

      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        message: "Invalid payment signature",
      });
    }

    const payment = await RazorpayPayment.findOne({
      razorpayOrderId: razorpay_order_id,
    });

    if (!payment) {
      return res.status(404).json({
        message: "Payment record not found",
      });
    }

    if (payment.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized payment",
      });
    }

    if (payment.status === "SUCCESS") {
      return res.status(400).json({
        message: "Payment already verified",
      });
    }

    const membership = await Membership.findById(membershipId);

    if (!membership) {
      return res.status(404).json({
        message: "Membership not found",
      });
    }

    const activeMembership = await MembershipPurchase.findOne({
      user: req.user.id,

      status: "ACTIVE",
    });

    if (activeMembership) {
      return res.status(400).json({
        message: "Already have active membership",
      });
    }

    const startDate = new Date();

    const endDate = new Date();

    endDate.setDate(endDate.getDate() + membership.durationInDays);

    await MembershipPurchase.create({
      user: req.user.id,

      membership: membershipId,

      startDate,

      endDate,

      status: "ACTIVE",
    });

    await RazorpayPayment.findOneAndUpdate(
      {
        razorpayOrderId: razorpay_order_id,
      },

      {
        razorpayPaymentId: razorpay_payment_id,

        status: "SUCCESS",
      },
    );

    return res.status(200).json({
      success: true,

      message: "Payment successful. Membership activated.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  createOrder,

  verifyPayment,
};
