import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="z-10 xs:text-xs sm:text-base md:text-[1.05rem] flex px-6 md:px-16 fixed py-4 md:py-10 w-full justify-between bg-[#181f2a]">
      <img alt="Fylo" className="w-24 sm:w-28" src="/assets/images/logo.svg" />

      <div className="flex w-fit md:w-1/3 lg:w-1/5 xl:w-1/6 justify-between gap-2 lg:gap-0">
        <a
          className="hover:text-white hover:underline
         transition duration-500 ease-in-out"
          href="#"
        >
          Features
        </a>
        <a
          className="hover:text-white hover:underline
                  transition duration-500 ease-in-out"
          href="#"
        >
          Team
        </a>
        <a
          className="hover:text-white hover:underline
                  transition duration-500 ease-in-out"
          href="#"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}
