import React from 'react';

import { FaRegCalendarAlt, FaUserMd, FaUsers, FaBuilding, FaMoneyBillWave, FaBoxes, FaRegQuestionCircle, FaCog, FaChartBar } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-56 border-r h-full bg-white s p-5 overflow-y-auto scrollbar-hide ">
      <div className="flex items-center space-x-2 mb-6">
    <img className="rounded-lg" width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzXJYWrI0RAiRJIPFkXujwO64avZtKbJZatDmLeos-eFM-WTR" alt="logo" />
        <div className="text-black text-2xl font-medium">We<span className="font-normal">Care</span></div>
      </div>
      
      <nav>
        <h3 className="text-gray-500 text-sm  mb-2">Main Menu</h3>
        <ul className="space-y-2">
          <SidebarItem icon={MdDashboard} label="Overview" active />
          <SidebarItem icon={FaUsers} label="Pacient" />
          <SidebarItem icon={FaRegCalendarAlt} label="Appointment" />
        </ul>
        
        <h3 className="text-gray-500 text-sm  mt-6 mb-2">Other Menu</h3>
        <ul className="space-y-2">
          <SidebarItem icon={FaUserMd} label="Doctors" />
          <SidebarItem icon={FaUsers} label="Employee" />
          <SidebarItem icon={FaBuilding} label="Department" />
          <SidebarItem icon={FaMoneyBillWave} label="Payment" />
          <SidebarItem icon={FaBoxes} label="Product & Stock" />
        </ul>

        <h3 className="text-gray-500 text-sm mt-6 mb-2">Help & Settings</h3>
        <ul className="space-y-2">
          <SidebarItem icon={FaRegQuestionCircle} label="Help & Center" />
          <SidebarItem icon={FaCog} label="Settings" />
          <SidebarItem icon={FaChartBar} label="Report" />
        </ul>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, active }) => {
  return (
    <li className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-teal-100 transition duration-300 ease-in-out ${active ? 'bg-teal-100' : ''}`}>
      <Icon className="text-gray-600 text-lg" />
      <span className="text-gray-700 font-normal">{label}</span>
    </li>
  );
};

export default Sidebar;
