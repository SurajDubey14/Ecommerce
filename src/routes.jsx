import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import MainLayout from "./MainLayout/layout.jsx";

import Home from "./pages/Home/Home.jsx";
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </MainLayout>
     
    </Router>

  );
};

export default AppRoutes;
