import React from "react";
import { NavLink } from "react-router-dom";

const SidebarComponent: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 h-screen p-4 w-64 bg-gray-100">
      <ul className="list-none p-0">
        <li className="mb-2">
          <NavLink to="/dashboard" className="font-normal">
            Dashboard
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink to="/dashboard/pokemon" className="font-normal">
            Pokemon
          </NavLink>
          <ul className="list-none pl-4">
            <li>
              <NavLink to="/dashboard/pokemon" className="font-normal">
                Pokemon List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/pokemon/category" className="font-normal">
                Pokemon Category
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SidebarComponent;
