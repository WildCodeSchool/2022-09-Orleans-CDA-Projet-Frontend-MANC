import React from "react";

const Navbar = () => {
  return (
    <header class="bg-greyblue text-white shadow-lg hidden md:block">
      <div class="flex justify-between h-24 w-full">
        <a href="" class="flex items-center justify-center">
          <img
            class="h-16"
            src="../../icon.png"
            alt=""
          />
          <span class="ml-4 font-black text-2xl">
            Map Quest
          </span>
        </a>
        <nav class="contents font-semibold text-base lg:text-lg">
          <ul class="mx-auto flex items-center">
            <li class="p-5 xl:p-8 active">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>About</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
