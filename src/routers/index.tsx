import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "components/NavbarComponent";
import LoadingComponent from "components/LoadingComponent";

// Lazily import components
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const SignUpPage = React.lazy(() => import("pages/SignUpPage"));

const DashboardRouters = React.lazy(() => import("routers/dashboard"));

const Routers: React.FC = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!isDashboardRoute && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<DashboardRouters />} />
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center min-h-screen">
              404 Not Found
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Routers;
