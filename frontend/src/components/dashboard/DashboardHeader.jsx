import { FaBars } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { toggleSidebar } from "../../redux/slices/sidebarSlice";

const DashboardHeader = () => {
  const dispatch = useDispatch();

  return (
    <header
      className="
h-20
bg-black
text-white
border-b
border-gray-800
flex
items-center
px-6
"
    >
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="
text-2xl
hover:text-red-600
transition
"
      >
        <FaBars />
      </button>
    </header>
  );
};

export default DashboardHeader;
