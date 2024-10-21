"use client";
import React, { useState } from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "About", path: "#about" },
  { name: "Project", path: "#project" },
  { name: "Contact", path: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-100 text-slate-700 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div key="home" className="text-lg font-bold hover:text-gray-200">
          <Link href="#home">AUNYAPAT</Link>
        </div>

        {/* Hamburger Icon (visible only on mobile) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="hamburger space-y-2">
            <span className="block w-8 h-0.5 bg-slate-700"></span>
            <span className="block w-8 h-0.5 bg-slate-700"></span>
            <span className="block w-8 h-0.5 bg-slate-700"></span>
          </div>
        </button>

        {/* Navigation links */}
        <ul
          className={` hidden md:flex md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 md:items-center`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="text-lg hover:text-gray-200">
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
              className="block text-lg hover:bg-sky-200 p-2 rounded"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
