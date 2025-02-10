import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
      <div className="relative w-full h-10 md:h-screen md:w-60 px-4 bg-gray-400 flex flex-row md:flex-col justify-center place-items-center py-10 md:-ml-110">
        <div className="w-8 h-10 rounded-full overflow-hidden md:absolute md:top-15 md:left-1/2 md:transform md:-translate-x-1/2 md:w-24 md:h-24">
          <img
            src="profile.png"
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation List */}
        <ul className="flex flex-row items-center gap-4 ml-auto md:flex-col md:gap-8 md:mt-28 md:ml-0">
          <li className="text-black text-sm md:text-xl hover:font-bold hover:text-white cursor-pointer">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-black text-sm md:text-xl hover:font-bold hover:text-white cursor-pointer">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="text-black text-sm md:text-xl hover:font-bold hover:text-white cursor-pointer">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="text-black text-sm md:text-xl hover:font-bold hover:text-white cursor-pointer">
            <Link to="/project">Projects</Link>
          </li>
        </ul>
      </div>
  );
}
