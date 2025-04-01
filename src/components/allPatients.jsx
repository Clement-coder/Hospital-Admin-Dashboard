import { useState } from "react";
import { Search, MoreVertical } from "lucide-react";

const patientsData = [
  {
    id: 1,
    idCode: "#FUP121312424",
    name: "Isagi Yoichi",
    age: 20,
    createdDate: "25 Dec 2023",
    time: "08:30 pm",
    type: "FUP+ECG",
    status: "Pending",
  },
  {
    id: 2,
    idCode: "#121312424",
    name: "Kaiser Brown",
    age: 23,
    createdDate: "01 Dec 2023",
    time: "12:30 pm",
    type: "FUP",
    status: "Confirmed",
  },
];

const allPatients = () => {
  const [search, setSearch] = useState("");

  const filteredPatients = patientsData.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-5 shadow-lg rounded-xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Patients</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search anything here"
              className="border rounded-md pl-10 pr-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="bg-gray-100 px-4 py-1 rounded-md text-sm hover:bg-gray-200">
            + Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left text-gray-500 text-sm">
            <th className="py-2">No</th>
            <th>ID Code</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Created Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={patient.id} className="border-b text-sm">
              <td className="py-3">{String(index + 1).padStart(2, "0")}</td>
              <td>{patient.idCode}</td>
              <td className="flex items-center gap-2">
                <span className="bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  🧑
                </span>
                {patient.name}
              </td>
              <td>{patient.age}</td>
              <td>{patient.createdDate}</td>
              <td>{patient.time}</td>
              <td>{patient.type}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-md text-xs ${
                    patient.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {patient.status}
                </span>
              </td>
              <td>
                <MoreVertical className="text-gray-400 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default allPatients;
