import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import membershipImages from "../../constants/membershipImages";

import { getMembershipById } from "../../api/membership.api";

import { createOrder, verifyPayment } from "../../api/payment.api";

const MembershipDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [plan, setPlan] = useState(null);

  const [loading, setLoading] = useState(true);

  const [paymentLoading, setPaymentLoading] = useState(false);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const data = await getMembershipById(id);

        setPlan(data.plan);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [id]);

  const handleBuyNow = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");

      return;
    }

    try {
      setPaymentLoading(true);
    console.log("Membership ID:", plan._id);
      const data = await createOrder(plan._id);

      const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          

        amount: data.order.amount,

        currency: data.order.currency,

        name: "GymPro",

        description: plan.name,

        order_id: data.order.id,

        handler: async function (response) {
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,

            razorpay_payment_id: response.razorpay_payment_id,

            razorpay_signature: response.razorpay_signature,

            membershipId: plan._id,
          };

          const result = await verifyPayment(verifyData);

          alert(result.message);
        },

        theme: {
          color: "#dc2626",
        },
      };
console.log(import.meta.env.VITE_RAZORPAY_KEY_ID);
      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
  console.log(error.response?.data);
}
     finally {
      setPaymentLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Membership not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold">{plan.name}</h1>

            <p className="mt-5 text-gray-400 text-lg">{plan.description}</p>

            <div className="mt-8">
              <span className="text-5xl font-bold">₹{plan.price}</span>

              <span className="text-gray-400 ml-2">
                / {plan.durationInDays} Days
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="h-2 w-2 rounded-full bg-red-600"></span>

                  {feature}
                </div>
              ))}
            </div>

            <button
              onClick={handleBuyNow}
              disabled={paymentLoading}
              className="mt-10 bg-red-600 px-10 py-3 rounded-xl font-semibold hover:bg-red-700 transition disabled:opacity-50"
            >
              {paymentLoading ? "Processing..." : "Buy Now"}
            </button>
          </div>

          <div>
            <img
              src={membershipImages[plan.name]}
              alt={plan.name}
              className="h-125 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipDetails;
