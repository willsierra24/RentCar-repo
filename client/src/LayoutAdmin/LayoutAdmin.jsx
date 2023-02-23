import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../LayoutAdmin/Sidebar";
import Header from "../LayoutAdmin/Header";

function LayoutAdmin() {
  //overflow-y-scroll
  return (
    <div className="bg-secondary-900 min-h-screen grid  grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh]  p-8  overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
