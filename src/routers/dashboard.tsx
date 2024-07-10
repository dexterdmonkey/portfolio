import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const UserPage = React.lazy(() => import("pages/UserPages"));
const SidebarComponent = React.lazy(
  () => import("components/SidebarComponent")
);
const DashboardNavbarComponent = React.lazy(
  () => import("components/DashboardNavbarComponent")
);

const Routers: React.FC = () => {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const handleSideOpenChange = (isOpen: boolean) => {
    setIsSideOpen(isOpen);
  };

  return (
    <>
      <div className="flex w-screen">
        {isSideOpen && <SidebarComponent />}
        <div className="w-[calc(screen-16rem)]">
          <DashboardNavbarComponent onSideOpenChange={handleSideOpenChange} />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/pokemon/:id" element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Routers;
