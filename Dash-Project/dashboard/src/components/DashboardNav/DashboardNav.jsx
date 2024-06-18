// src/components/Dashboard.js
import React, { useState } from "react";
import logo from "../images/Logo.png";
import logo1 from "../images/Logo1.png";

import {
  FaTachometerAlt,
  FaChartPie,
  FaFileInvoice,
  FaCalendarAlt,
  FaEnvelope,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const DashboardNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
  
    <div className="flex h-screen bg-gray-100 ">
      <div
        className={`transition-width duration-500    ${
          isNavOpen ? "w-52 " : "w-20 m-3"
        } bg-white shadow-lg `}
        >
        <button
          onClick={toggleNav}
          className={`mt-4 ml-4 pt-4  text-gray-500 focus:outline-none`}
           >
          {!isNavOpen && (
            <h1 className=" mt-5  ">
              <img className="" src={logo1} alt="" />
            </h1>
          )}
          {/* <img src={logo1} alt="" /> */}
        </button>
        <div className="flex flex-col items-center">
          <div className="flex items-center  mt-4 mb-6" onClick={toggleNav}>
            {isNavOpen && (
              <h1 className="text-xl font-bold text-gray-700">
                <img src={logo} alt="" />
              </h1>
            )}
          </div>
          <nav className=" w-full flex-1">
            <NavItem
              icon={<FaTachometerAlt />}
              label="Dashboard"
              isNavOpen={isNavOpen}
            ></NavItem>
            <NavItem
              icon={<FaChartPie />}
              label="Analytics"
              isNavOpen={isNavOpen}
            ></NavItem>
            <NavItem
              icon={<FaFileInvoice />}
              label="Invoice"
              isNavOpen={isNavOpen}
            ></NavItem>
            <NavItem
              icon={<FaCalendarAlt />}
              label="Schedule"
              isNavOpen={isNavOpen}
            ></NavItem>
            <NavItem
              icon={<FaCalendarAlt />}
              label="Calendar"
              isNavOpen={isNavOpen}
            ></NavItem>
            <NavItem
              icon={<FaEnvelope />}
              label="Messages"
              isNavOpen={isNavOpen}
            ></NavItem>
            <NavItem
              icon={<FaBell />}
              label="Notification"
              isNavOpen={isNavOpen}
            ></NavItem>
            <NavItem
              icon={<FaCog />}
              label="Settings"
              isNavOpen={isNavOpen}
            ></NavItem>
          </nav>
        </div>
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">
          <Link to="/"></Link>
        </h1>
        {/* Add your dashboard content here */}
        
      </div>
     
    </div>
    
  );
};


const NavItem = ({ icon, label, isNavOpen }) => (
  <div className="flex   p-2 text-gray-600 hover:text-blue-500 hover:bg-gradient-to-r from-slate-100  to-white rounded-lg">
    <div className="p-2 pl-6">{icon}</div>
    {isNavOpen && <span className="ml-4 ">{label}</span>}
  </div>
  
  
);

export default DashboardNav;
