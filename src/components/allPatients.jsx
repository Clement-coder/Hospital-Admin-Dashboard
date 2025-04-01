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
              <td className="flex items-center gap-2 text-center">
                <span className="bg-gray-200 w-6 h-6 rounded-full  flex items-center justify-center text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
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
