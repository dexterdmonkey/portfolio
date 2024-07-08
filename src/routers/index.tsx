import { Routes, Route } from "react-router-dom";
import UserPage from "pages/UserPages"
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import DashboardPage from "pages/DashboardPage";

const Routers: React.FC = () => {
  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/users/:id" element={<UserPage />} />
  </Routes>
  );
};

export default Routers;
