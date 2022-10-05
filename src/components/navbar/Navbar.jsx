import React from "react";

const Navbar = () => {
  return (
    <header className="bg-greyblue text-white shadow-lg hidden md:block">
      <div className="flex justify-around h-24 w-full px-4">
        <a href="" className="flex items-center justify-center">
          <img className="h-16" src="../../icon.png" alt="" />
          <span className="ml-4 font-semibold text-3xl">Map Quest</span>
        </a>
        <nav className="contents font-semibold justify-between text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8">
              <a href="">
                <span className="text-2xl">Play</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">
                <span className="text-2xl">Learn</span>
              </a>
            </li>
          </ul>
        <div className="flex items-center">
          <a className="p-5 xl:p-8">About</a>
        </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
