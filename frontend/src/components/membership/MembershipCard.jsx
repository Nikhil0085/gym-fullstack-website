import { Link } from "react-router-dom";
import membershipImages from "../../constants/membershipImages";
const MembershipCard = ({ plan }) => {
  return (
    <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-3 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/20">
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-red-600/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>

      <div className="relative">
        <h3 className="text-3xl font-bold text-white">{plan.name}</h3>

        <p className="mt-3 text-gray-400">{plan.description}</p>

        <div className="mt-6">
          <span className="text-5xl font-bold text-white">₹{plan.price}</span>

          <span className="text-gray-400">/ {plan.durationInDays} Days</span>
        </div>

        <div className="mt-8 space-y-4">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-300">
              <span className="h-2 w-2 rounded-full bg-red-600"></span>

              {feature}
            </div>
          ))}
        </div>

        <Link
          to={`/membership/${plan._id}`}
          className="mt-10 block w-full text-center rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MembershipCard;
