import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "components/NavbarComponent";

// Lazily import components
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const SignUpPage = React.lazy(() => import("pages/SignUpPage"));
const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const UserPage = React.lazy(() => import("pages/UserPages"));

const Routers: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/users/:id" element={<UserPage />} />
            </Routes>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
