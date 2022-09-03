import React, { useEffect, useState } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: any }) => {
  
  return (
    <div className="wrapper">
      <div className="main">
        <Header/>
        <main className="content d-flex p-0 my-4">{children}</main>
      </div>
      <div className="toast-container">
      </div>
    </div>
  );
};

export default Layout;