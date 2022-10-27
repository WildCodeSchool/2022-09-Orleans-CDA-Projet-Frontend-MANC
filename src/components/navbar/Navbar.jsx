import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import NavbarLink from "../navbarLink/NavbarLink";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-50 text-white shadow-lg fixed z-50 w-full">
      <div className="flex h-20 w-full px-4">
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
          <span className="font-semibold text-3xl text-lightblue">Quest</span>
        </NavLink>
        <nav className="flex flex-grow">
          <section className="hidden lg:contents font-semibold text-base">
            <NavbarLink isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          </section>
          <section className="flex justify-end flex-grow items-center lg:hidden">
            <div
              className={`space-y-2 cursor-pointer ${isNavOpen && "hidden"}`}
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>

            <div
              className={`space-y-2 cursor-pointer ${!isNavOpen && "hidden"}`}
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <NavbarLink isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            </div>
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
