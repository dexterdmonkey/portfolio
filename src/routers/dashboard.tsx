import PokemonDetailPage from "pages/PokemonDetailPage";
import PokemonTypesPage from "pages/PokemonTypesPage";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const PokemonListPage = React.lazy(() => import("pages/PokemonListPage"));
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
      <div className="flex max-w-full">
        {isSideOpen && <SidebarComponent />}
        <div className="w-full">
          <DashboardNavbarComponent onSideOpenChange={handleSideOpenChange} />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/pokemon" element={<PokemonListPage />} />
            <Route path="/pokemon/type" element={<PokemonTypesPage />} />
            <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Routers;
