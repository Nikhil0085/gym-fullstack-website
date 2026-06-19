import { useEffect, useState } from "react";

import { getAllMembershipPlans } from "../../api/membership.api";

import MembershipCard from "../../components/membership/MembershipCard";

const Membership = () => {
  const [plans, setPlans] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getAllMembershipPlans();

        setPlans(data.plans);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Plans...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-center text-5xl font-bold">
          Choose Your Membership
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Select the perfect plan for your fitness journey
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <MembershipCard key={plan._id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
