import { FaHospitalUser, FaProcedures } from "react-icons/fa";
import React from 'react';
import { MdMeetingRoom } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Week 1", patients: 400 },
  { name: "Week 2", patients: 500 },
  { name: "Week 3", patients: 700 },
  { name: "Week 4", patients: 600 },
  { name: "Week 5", patients: 800 },
  { name: "Week 6", patients: 600 },
];

const Progress = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-teal-500 h-2.5 rounded-full"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...props}>
    {children}
  </div>
);

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 mt-10">
      {/* Overall Visitors Card */}
      <Card className="bg-[teal] text-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FaHospitalUser className="text-teal"/> Overall Visitors
          </h2>
          <span className="text-xl">⋯</span>
        </div>
       <div className="flex items-center gap-2">
         <h1 className="text-4xl font-medium mt-2">10,525</h1>
        <span className="text-sm bg-teal-500 px-2 py-1 rounded-xl">+15.2%</span>
       </div>
        <p className="mt-2 text-sm py-4">Data from 5,567 to 7,525 visitors</p>
        <Progress value={30} className="mt-2" />
        <p className="mt-2 text-sm">1,345 today</p>
      </Card>

      {/* Total Patients Card */}
      <Card className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FaHospitalUser /> Total Patients
          </h2>
          <span className="text-xl">⋯</span>
        </div>
       <div className="flex items-center gap-2">
       <h1 className="text-4xl font-medium mt-2">5,715</h1>
       <span className="text-sm bg-teal-100 px-2 py-1 rounded-xl text-teal-700">+10.4%</span>
       </div>
        <p className="mt-2 text-sm py-4">Increase in data by 500 patients</p>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="patients" fill="teal" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Surgery Card */}
      <Card className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FaProcedures /> Surgery
          </h2>
          <span className="text-xl">⋯</span>
        </div>
     <div className="flex items-center gap-2">
     <h1 className="text-4xl font-medium mt-2">523</h1>
     <span className="text-sm bg-teal-100 px-2 py-1 rounded-xl text-teal-700">+165</span>
     </div>
        <p className="mt-2 text-sm py-4">Data obtained from 10.2% to 15.7%</p>
        <Progress value={60} className="mt-2 " />
        <p className="mt-2 text-sm py-4">1,345 today</p>
      </Card>

      {/* Overall Rooms Card */}
      <Card className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <MdMeetingRoom /> Overall Rooms
          </h2>
          <span className="text-xl">⋯</span>
        </div>
       <div className="flex items-center gap-2">
       <h1 className="text-4xl font-medium mt-2">221</h1>
       <span className="text-sm bg-teal-100 px-2 py-1 rounded-xl text-teal-700">+165</span>
       </div>
        <p className="mt-2 text-sm py-4">Room distribution:</p>
        <p className="text-blue-600 py-4 border-b">🟦 General Room: 110</p>
        <p className="text-teal-600 py-4">🟩 Private Room: 111</p>
      </Card>
    </div>
  );
};

export default DashboardCards;