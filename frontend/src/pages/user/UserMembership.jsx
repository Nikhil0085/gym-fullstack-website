import { useEffect, useState } from "react";
import { getActiveMembership } from "../../api/dashboard.api";

import { FaCalendarAlt, FaCheckCircle, FaCrown } from "react-icons/fa";

const UserMembership = () => {
  const [membership, setMembership] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembership = async () => {
      try {
        const data = await getActiveMembership();

        setMembership(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembership();
  }, []);

  if (loading) {
    return <div className="text-white">Loading membership...</div>;
  }

  if (!membership?.membership) {
    return (
      <div className="bg-gray-900 rounded-2xl p-10 text-white">
        <h2 className="text-3xl font-bold">No Active Membership</h2>

        <p className="text-gray-400 mt-3">
          Purchase a membership plan to unlock all features.
        </p>
      </div>
    );
  }

  const plan = membership.membership;

  return (
    <div className="text-white space-y-8">
      <div className="bg-linear-to-r from-red-600 to-red-800 rounded-3xl p-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
              <FaCrown className="text-yellow-300 text-3xl" />

              <h1 className="text-4xl font-bold">{plan.planName}</h1>
            </div>

            <p className="mt-4 text-red-100">Active Membership</p>
          </div>

          <div className="text-right">
            <p className="text-5xl font-bold">{membership.remainingDays}</p>

            <p>Days Remaining</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Membership Details</h2>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <FaCalendarAlt className="text-red-600" />
              Start Date: {new Date(plan.startDate).toDateString()}
            </p>

            <p className="flex items-center gap-3">
              <FaCalendarAlt className="text-red-600" />
              Expiry Date: {new Date(plan.endDate).toDateString()}
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Features</h2>

          <div className="space-y-4">
            {plan.features?.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-300"
              >
                <FaCheckCircle className="text-green-500" />

                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="
      bg-red-600
      px-8
      py-3
      rounded-xl
      font-semibold
      hover:bg-red-700
      transition
      "
      >
        Upgrade Membership
      </button>
    </div>
  );
};

export default UserMembership;
