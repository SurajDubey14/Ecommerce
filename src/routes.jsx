import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./MainLayout/layout.jsx";

import Home from "./pages/Home/Home.jsx";
import RegisterProcess from "./pages/RegisterProcess/RegisterProcess.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/auth" element={<RegisterProcess />} />
        {/* <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
