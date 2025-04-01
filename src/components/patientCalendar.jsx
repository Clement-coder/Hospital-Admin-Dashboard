import { useState } from 'react';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"; 
import dayjs from "dayjs";
// import { Button } from "@mui/material";
import { Calendar, Circle } from "lucide-react";

const events = [
  { date: "2022-06-10", type: "appointment", label: "Dr. Rick Appointment", color: "#7ED321" },
  { date: "2022-06-15", type: "meeting", label: "Dentist Meetup", color: "#4A90E2" },
  { date: "2022-06-19", type: "surgery", label: "Jhon Surgery", color: "#F5A623" },
];

const patientCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs("2022-06-10"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="p-4 bg-white shadow-lg rounded-xl w-[520px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg  text-gray-600 p-4 flex items-center gap-2">
          <Calendar/> Calendar 
          </h2>
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-sm"><Circle size={10} className="text-green-500" /> Appointment</span>
            <span className="flex items-center gap-1 text-sm"><Circle size={10} className="text-blue-500" /> Meeting</span>
            <span className="flex items-center gap-1 text-sm"><Circle size={10} className="text-yellow-500" /> Surgery</span>
          </div>
        </div>
        
<div className="flex">
    <div>
    <DateCalendar value={selectedDate} onChange={setSelectedDate} /> {/* ✅ Fixed Component */}
    </div>
    <div>
    <div className="mt-4">
          <h3 className="text-md font-semibold">
          Activity Details
            </h3>
          {events.map((event, index) => (
            <div key={index} className="flex items-center gap-2 text-sm mt-2">
              <Circle size={10} style={{ color: event.color }} />
              {event.label}
            </div>
          ))}
        </div>
        <button variant="contained" className="w-full mt-4 bg-white border border-gray-300 py-3 relative top-24 text-black font-medium px-4 ">+ Add New</button>
      </div>
    </div>
</div>
      
    </LocalizationProvider>
  );
};

export default patientCalendar;
