import { NavLink } from "react-router-dom";
import { MdNotStarted, MdBook, MdList, MdQuiz } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="flex justify-around h-20 w-full px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center"
              : " opacity-40 flex items-center justify-center"
          }
        >
          <img className="h-16" src="../../icon.png" alt="" />
          <span className="ml-4 font-semibold text-3xl text-green-400">
            Map
          </span>
          <span className="ml-2 font-semibold text-3xl text-lightblue">
            Quest
          </span>
        </NavLink>
        <nav className="contents font-semibold justify-between text-base lg:text-lg">
          <ul className="mx-auto flex items-center gap-8">
            <NavLink
              to="/play"
              className={({ isActive }) => (isActive ? "" : "opacity-40")}
            >
              <li className="p-5 xl:p-8 flex items-center gap-2">
                <span className="text-2xl">Play</span>
                <MdNotStarted className="text-2xl" />
              </li>
            </NavLink>
            <NavLink
              to="/learn"
              className={({ isActive }) => (isActive ? "" : "opacity-40")}
            >
              <li className="p-5 xl:p-8 flex items-center gap-2">
                <MdBook className="text-2xl" />
                <span className="text-2xl">Learn</span>
              </li>
            </NavLink>
          </ul>
          <div className="flex items-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "p-5 xl:p-8 flex items-center gap-2"
                  : "p-5 xl:p-8 opacity-40 flex items-center gap-2"
              }
            >
              <span className="text-md">About</span>
              <MdQuiz className="text-2xl" />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
