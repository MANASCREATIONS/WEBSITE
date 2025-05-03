import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import UserDashboard from "../pages/user/UserDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import LandingDashboard from "../pages/LandingDashboard";
import Layout from "../components/layout/Layout";
import SampleForm from "../pages/user/DAAKHLE/SampleForm";
import NotFound from "../pages/NotFound";
import KaamMaagniArjForm from "@/pages/user/MANREGA/KaamMaagniArjForm";

const SampleFormPlaceholder = () => (
  <div className="animate-fade-in">
    <h1 className="text-2xl font-bold mb-6">Sample Form</h1>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <p className="text-gray-600 dark:text-gray-400">Form implementation pending</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      
      <Route path="/user" element={<Layout userType="user" />}>
        <Route index element={<Navigate to="/user/dashboard" replace />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="DAAKHLE/SampleForm" element={<SampleForm />} />
        <Route path="MANREGA/KaamMaagni" element={<KaamMaagniArjForm />} />
      </Route>
      
      <Route path="/admin/*" element={<AdminDashboard />} />
      
      {/* Use NotFound for 404 route, or redirect to home */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;