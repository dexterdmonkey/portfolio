import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <NavLink to="/" className="p-1 font-normal text-blue-gray-900">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/project" className="p-1 font-normal text-blue-gray-900">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="p-1 font-normal text-blue-gray-900">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/sign-up" className="p-1 font-normal text-blue-gray-900">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 h-max bg-primary shadow-md px-4 py-2 lg:px-8 lg:py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink to="/" className="cursor-pointer py-1.5 font-medium">
          Dexterdmonkey
        </NavLink>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>

          <button
            className="ml-auto lg:hidden"
            onClick={handleToggleNav}
          >
            {isNavOpen ? (
             <p>Open</p>
            ) : (
              <p>Close</p>
            )}
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div className="lg:hidden">
          {navList}
          <div className="flex flex-col items-center gap-x-1 p-4">
            <button className="w-full text-sm text-blue-gray-900 mb-2 py-2 px-4 border rounded-md">
              Log In
            </button>
            <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md">
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
