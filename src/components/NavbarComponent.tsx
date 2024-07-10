import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navList = (
    <ul
      onClick={() => setIsNavOpen(false)}
      className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <li>
        <NavLink to="/" className="p-1 font-normal text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/project" className="p-1 font-normal text-white">
          Projects
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 h-max bg-gradient-to-r from-primary to-secondary shadow-md px-4 py-2 lg:px-8 lg:py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between text-white">
        <NavLink to="/" className="cursor-pointer py-1.5 font-medium">
          Dexterdmonkey
        </NavLink>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <div></div>
          <NavLink to="/login" className="p-1 font-normal hidden lg:block">
            <button className="w-full text-sm text-white py-2 px-4 border rounded-md">
              Login
            </button>
          </NavLink>
          <NavLink to="/sign-up" className="p-1 font-normal hidden lg:block">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md">
              Sign Up
            </button>
          </NavLink>
          <button className="ml-auto lg:hidden" onClick={handleToggleNav}>
            {isNavOpen ? (
              <i className="bi bi-dash"></i>
            ) : (
              <i className="bi bi-justify"></i>
            )}
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div className="lg:hidden">
          {navList}
          <div
            onClick={() => setIsNavOpen(false)}
            className="flex flex-col items-center gap-x-1 p-4"
          >
            <NavLink className="w-full" to="/login">
              <button className="w-full text-sm text-white mb-2 py-2 px-4 border rounded-md">
                Log In
              </button>
            </NavLink>
            <NavLink className="w-full" to="/sign-up">
              <button className="w-full bg-primary text-white py-2 px-4 rounded-md">
                Sign in
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
