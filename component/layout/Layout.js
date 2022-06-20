import React from "react";
import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";
function Layout({ children }) {
  return (
    <div className="layout-container">
      <CustomHeader />
      {children}
      <CustomFooter />
    </div>
  );
}

export default Layout;
