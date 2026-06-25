import { useEffect, useState } from "react";

import {
  getAllMemberships,
  deleteMembership,
  createMembership,
} from "../../api/adminMembership.api";

const ManageMembership = () => {
  const [plans, setPlans] = useState([]);

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    durationInDays: "",
    features: "",
  });

  const fetchPlans = async () => {
    try {
      const data = await getAllMemberships();

      setPlans(data.plans || data.memberships || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      await createMembership({
        ...form,

        price: Number(form.price),

        durationInDays: Number(form.durationInDays),

        features: form.features.split(","),
      });

      setForm({
        name: "",
        description: "",
        price: "",
        durationInDays: "",
        features: "",
      });

      fetchPlans();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMembership(id);

      fetchPlans();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="text-white p-8">Loading Memberships...</div>;
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">Manage Membership</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-5">Create New Plan</h2>

        <form onSubmit={handleCreate} className="grid gap-4">
          <input
            className="bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Plan Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <textarea
            className="bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <input
            className="bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input
            className="bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Duration Days"
            value={form.durationInDays}
            onChange={(e) =>
              setForm({ ...form, durationInDays: e.target.value })
            }
          />

          <input
            className="bg-black border border-gray-700 rounded-xl p-3"
            placeholder="Features comma separated"
            value={form.features}
            onChange={(e) => setForm({ ...form, features: e.target.value })}
          />

          <button className="bg-red-600 rounded-xl py-3 font-semibold">
            Create Plan
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-red-500">{plan.name}</h2>

            <p className="text-gray-400 mt-3">{plan.description}</p>

            <p className="mt-4">₹{plan.price}</p>

            <p>{plan.durationInDays} Days</p>

            <div className="mt-5">
              <h3 className="font-semibold">Features</h3>

              <ul className="text-gray-400">
                {plan.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleDelete(plan._id)}
              className="mt-6 bg-red-600 px-5 py-2 rounded-xl"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMembership;
