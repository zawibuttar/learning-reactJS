import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../pages/login';
import Register from '../pages/register';
import URL from "../constants/urls";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URL.LOGIN} element={<Login />} />
      <Route path={URL.REG} element={<Register />} />

      <Route path={URL.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
