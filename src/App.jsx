import "./App.css";
import React from "react";
import withAuth from "./hoc/withAuth";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 max-h-[100vh] overflow-x-hidden">
        {/* Sidebar - Only visible on screens wider than or equal to 'md' (medium) */}
        <div className="col-span-2 hidden sm:block">
          <SideBar />
        </div>

        <div className="col-span-12 sm:col-span-10 grid-flow-col ">
          <div className="row-span-1">
            <NavBar />
          </div>
          <div className="row-span-11">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

const ProtectedComponent = withAuth(App);

export default ProtectedComponent;
