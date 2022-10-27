import { NavLink } from "react-router-dom";
import { MdNotStarted, MdBook, MdQuiz } from "react-icons/md";

const NavbarLink = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <>
      <ul
        className={`mx-auto flex ${
          isNavOpen
            ? "flex-col gap-5 pt-5 lg:flex-row lg:pt-0 lg:items-center"
            : "gap-8 items-center pr-[109px]"
        }`}
      >
        <NavLink
          to="/play"
          className={({ isActive }) =>
            isActive
              ? "text-lightblue w-fit"
              : "hover-underline-animation w-fit"
          }
          onClick={() => setIsNavOpen(false)}
        >
          <li className="flex items-center gap-2">
            <span className="text-2xl">Play</span>
            <MdNotStarted className="text-2xl" />
          </li>
        </NavLink>
        <NavLink
          to="/learn"
          className={({ isActive }) =>
            isActive ? "text-lightblue" : "hover-underline-animation"
          }
          onClick={() => setIsNavOpen(false)}
        >
          <li className="flex items-center gap-2">
            <MdBook className="text-2xl hidden lg:block" />
            <span className="text-2xl">Learn</span>
            <MdBook className="text-2xl block lg:hidden" />
          </li>
        </NavLink>
      </ul>
      <div className={`${isNavOpen && "py-5"} flex items-center`}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-lightblue pl-1 flex items-center gap-2 text-2xl"
              : "hover-underline-animation pl-1 flex items-center gap-2 text-2xl"
          }
          onClick={() => setIsNavOpen(false)}
        >
          <span className="text-md">About</span>
          <MdQuiz className="text-2xl" />
        </NavLink>
      </div>
    </>
  );
};

export default NavbarLink;
