import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: any }) => {
  
  return (
    <div className="wrapper">
      <div className="main">
        <Header/>
        <main className="content d-flex justify-content-center p-0 my-4">{children}</main>
        <Footer/>
      </div>
      <div className="toast-container">
      </div>
    </div>
  );
};

export default Layout;