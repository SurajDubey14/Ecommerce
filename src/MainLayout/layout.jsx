import React, { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Sidebar */}
      <div className={``}>
        <Header />
      </div>

      {/* Main content area */}
      <div className="min-h-screen mt-4">
        {/* Main content area: dynamic content */}
        <main className=""><Outlet/></main>
      </div>
      <div className={``}>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
