import {
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaCalendarAlt,
  FaEdit,
  FaLock,
} from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "Nikhil Sharma",
    email: "user@gmail.com",
    role: "USER",
    joined: "June 2026",
  };

  return (
    <div className="text-white space-y-8">
      {/* PROFILE HEADER */}

      <div
        className="
bg-gray-900
rounded-3xl
p-8
flex
items-center
justify-between
"
      >
        <div className="flex items-center gap-6">
          <div
            className="
h-24
w-24
rounded-full
bg-red-600
flex
items-center
justify-center
text-4xl
font-bold
"
          >
            N
          </div>

          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>

            <p className="text-gray-400 mt-2">Fitness Member</p>
          </div>
        </div>

        <button
          className="
bg-red-600
px-6
py-3
rounded-xl
flex
items-center
gap-2
hover:bg-red-700
transition
"
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>

      {/* PERSONAL DETAILS */}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaUser className="text-red-500" />

              <div>
                <p className="text-gray-400 text-sm">Name</p>

                <p>{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500" />

              <div>
                <p className="text-gray-400 text-sm">Email</p>

                <p>{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-red-500" />

              <div>
                <p className="text-gray-400 text-sm">Role</p>

                <p>{user.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACCOUNT DETAILS */}

        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">Account Details</h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-red-500" />

              <div>
                <p className="text-gray-400 text-sm">Joined</p>

                <p>{user.joined}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLock className="text-red-500" />

              <div>
                <p className="text-gray-400 text-sm">Password</p>

                <p>********</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEMBERSHIP STATUS */}

      <div className="bg-linear-to-r from-red-600 to-red-500 rounded-3xl p-8">
        <h2 className="text-3xl font-bold">Membership Status</h2>

        <p className="mt-3">Active Membership</p>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-sm">Plan</p>

            <h3 className="text-2xl font-bold">Basic</h3>
          </div>

          <div>
            <p className="text-sm">Expiry</p>

            <h3 className="text-2xl font-bold">14 August 2026</h3>
          </div>
        </div>
      </div>

      {/* SETTINGS */}

      <div className="bg-gray-900 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Settings</h2>

        <div className="mt-6 space-y-4">
          <button
            className="
w-full
text-left
bg-gray-800
p-4
rounded-xl
hover:bg-gray-700
transition
"
          >
            Change Password
          </button>

          <button
            className="
w-full
text-left
bg-gray-800
p-4
rounded-xl
hover:bg-gray-700
transition
"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
