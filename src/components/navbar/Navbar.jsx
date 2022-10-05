import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-greyblue text-white shadow-lg">
      <div className="flex justify-around h-24 w-full px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center"
              : " opacity-40 flex items-center justify-center"
          }
        >
          <img className="h-16" src="../../icon.png" alt="" />
          <span className="ml-4 font-semibold text-3xl text-lightgreen">
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
              <li className="p-5 xl:p-8">
                <span className="text-2xl">Play</span>
              </li>
            </NavLink>
            <NavLink
              to="/learn"
              className={({ isActive }) => (isActive ? "" : "opacity-40")}
            >
              <li className="p-5 xl:p-8">
                <span className="text-2xl">Learn</span>
              </li>
            </NavLink>
          </ul>
          <div className="flex items-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "p-5 xl:p-8" : "p-5 xl:p-8 opacity-40"
              }
            >
              About
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
