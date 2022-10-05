import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-greyblue text-white shadow-lg hidden md:block">
      <div className="flex justify-around h-24 w-full px-4">
        <Link to="/" className="flex items-center justify-center">
          <img className="h-16" src="../../icon.png" alt="" />
          <span className="ml-4 font-semibold text-3xl">Map Quest</span>
        </Link>
        <nav className="contents font-semibold justify-between text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8">
              <Link to="/play">
                <span className="text-2xl">Play</span>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link to="/learn">
                <span className="text-2xl">Learn</span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Link to="/about" className="p-5 xl:p-8">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
