"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropright } from "react-icons/io";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "About me", path: "#about" },
  { name: "Project", path: "#project" },
  { name: "Experience", path: "#experience" },
  { name: "Contact", path: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-200 z-[999] shadow-md flex justify-center shadow-slate-200 dark:bg-slate-100 text-slate-700 p-4 fixed top-0 w-full">
      <div className="container flex justify-between items-center w-full">
        {/* Logo */}
        <div key="home" className="text-lg font-bold hover:text-gray-200">
          <Link href="#home">AUNYAPAT</Link>
        </div>

        {/* Hamburger Icon (visible only on mobile) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <RxCross2 className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>

        {/* Navigation links */}
        <ul
          className={` hidden md:flex md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 md:items-center`}
        >
          {navItems.map((item) => (
            <li
              key={item.name}
              className="text-lg hover:text-slate-200 hover:bg-slate-700 px-2 rounded-md"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${menuOpen ? "block" : "hidden"} md:hidden space-y-4 mt-4`}
      >
        {navItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <div
              onClick={toggleMenu}
              className="flex text-lg hover:bg-slate-300 p-2 rounded flex-row items-center"
            >
              <IoMdArrowDropright /> {item.name}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
