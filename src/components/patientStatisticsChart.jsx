import React from "react";
import { FaHospitalUser, FaProcedures } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { day: "Monday", patient: 950, inpatient: 400 },
  { day: "Tuesday", patient: 792, inpatient: 493 },
  { day: "Wednesday", patient: 501, inpatient: 150 },
  { day: "Thursday", patient: 800, inpatient: 523 },
  { day: "Friday", patient: 500, inpatient: 150 },
  { day: "Saturday", patient: 500, inpatient: 150 },
  { day: "Sunday", patient: 210, inpatient: 100 },
];

const PatientStatisticsChart = () => {
  return (
    <div className="bg-white rounded-sm shadow-md w-[520px]">
      <h2 className="text-lg  text-gray-600 p-4 flex items-center gap-2">
      <FaHospitalUser />  Patient Statistics
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={20}>
          <XAxis dataKey="day" className="text-xs" />
          <YAxis className="text-sm" />
          <Tooltip />
          <Legend />
          <Bar dataKey="patient" fill="teal" name="Patient" radius={[4, 4, 0, 0]} />
          <Bar dataKey="inpatient" fill="#f4c430" name="Inpatient" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientStatisticsChart;
