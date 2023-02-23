import React from "react";
import { Outlet } from "react-router-dom";

function LayoutAuth() {
  return (
    <div className=" bg-secondary-900 min-h-screen flex items-center justify-center p-4">
      <Outlet />
    </div>
  );
}

export default LayoutAuth;
