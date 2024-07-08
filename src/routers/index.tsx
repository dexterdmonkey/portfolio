import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazily import components
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const SignUpPage = React.lazy(() => import("pages/SignUpPage"));
const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const UserPage = React.lazy(() => import("pages/UserPages"));

const Routers: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
