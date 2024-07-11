import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface DashboardNavbarProps {
  onSideOpenChange: (isOpen: boolean) => void;
}

const DashboardNavbarComponent: React.FC<DashboardNavbarProps> = ({
  onSideOpenChange,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [isSideOpen, setIsSideOpen] = useState(true);
  const handleToggleSide = () => {
    const newSideOpenState = !isSideOpen;
    setIsSideOpen(newSideOpenState);
    onSideOpenChange(newSideOpenState);
  };

  const navList = (
    <ul
      onClick={() => setIsNavOpen(false)}
      className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <li>
        <NavLink to="/dashboard/profile" className="p-1 font-normal ">
          Profile
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="sticky top-0 w-full z-10 bg-white shadow-md border-b border-gray-200 pr-2 pl-0 py-2 lg:px-8 lg:py-4">
      <div className="max-w-screen-xl mx-1 flex items-center justify-between ">
        <div>
          <button className="mx-2" onClick={handleToggleSide}>
            <i className="bi bi-menu-button"></i>
          </button>
          <NavLink
            to="/dashboard"
            className="cursor-pointer py-1.5 font-medium"
          >
            Dexterdmonkey
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <div>
            <NavLink to="/login" className="p-1 font-normal hidden lg:block">
              <button className="w-full text-sm py-2 px-4 border rounded-md">
                Logout
              </button>
            </NavLink>
          </div>
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
              <button className="w-full text-sm mb-2 py-2 px-4 border rounded-md">
                Logout
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbarComponent;
