import React, { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Sidebar */}
      <div className={``}>
        <Header />
      </div>

      {/* Main content area */}
      <div className="min-h-screen bg-gray-500 text-white">
        {/* Main content area: dynamic content */}
        <main className="">{children}</main>
      </div>
      <div className={``}>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
