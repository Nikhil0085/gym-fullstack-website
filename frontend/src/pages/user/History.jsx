import { useEffect, useState } from "react";

import { getMembershipHistory } from "../../api/history.api";

const History = () => {
  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getMembershipHistory();

        setHistory(data.history);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading History...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Membership History</h1>

      {history.length === 0 ? (
        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <p className="text-gray-400">No membership history found</p>
        </div>
      ) : (
        <div className="space-y-6">
          {history.map((item) => (
            <div
              key={item._id}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{item.membership.name}</h2>

                  <p className="text-gray-400 mt-2">₹{item.membership.price}</p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    item.status === "ACTIVE" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-5 mt-6 text-gray-300">
                <div>
                  <p className="text-gray-500">Start Date</p>

                  <p>{new Date(item.startDate).toLocaleDateString()}</p>
                </div>

                <div>
                  <p className="text-gray-500">End Date</p>

                  <p>{new Date(item.endDate).toLocaleDateString()}</p>
                </div>

                <div>
                  <p className="text-gray-500">Duration</p>

                  <p>{item.membership.durationInDays} Days</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
