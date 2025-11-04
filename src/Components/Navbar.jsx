import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar shadow-sm border-b border-gray-200 bg-white">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">

          <div className="text-xl font-bold flex items-center gap-2 text-purple-600">
            <img
              src="/images/logo.png"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            HERO.IO
          </div>
        </div>

        <div className="grid grid-rows-3 md:flex items-center gap-10">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "text-purple-600"}>Home</NavLink>
          <NavLink to="/apps" className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "text-purple-600"}>Apps</NavLink>
          <NavLink to="/installation" className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "text-purple-600"}>Installation</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/arafat100"
            target="_blank"
            rel=""
            className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 flex items-center gap-1 no-underline"
          >
            <span className="text-xs"><FaGithub></FaGithub></span>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
}