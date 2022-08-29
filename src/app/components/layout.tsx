import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: any }) => {
  
  return (
    <div className="wrapper">
      <div className="main d-flex justify-content-center">
        <header>
        </header>
        <main className="content d-flex p-0">{children}</main>
      </div>
      <div className="toast-container">
      </div>
    </div>
  );
};

export default Layout;