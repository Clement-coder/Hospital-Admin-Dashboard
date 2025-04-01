import React from 'react';
import Sidebar from "./components/sidebar"
import Dashboardheader from "./components/dashboardHeader"
import Dashboardcards from "./components/dashboardCards"
import PatientChart from "./components/patientStatisticsChart"
import  PatientCalendar  from "./components/patientCalendar"
import AllPatients  from "./components/allPatients"


const App = () => {
  return (
    <div className="flex justify-center text-center mx-auto ">

      <Sidebar/>

     
     <div>
   <div className=" overflow-y-auto scrollbar-hide">
    <div className='space-y-10'>
    <Dashboardheader/>

    </div>
     <Dashboardcards/>
     <div className="flex justify-between">
     <PatientChart />
    <div className=" w-[530px]">
    <PatientCalendar/>
    </div>
     </div>
     <AllPatients/>
   </div>
     </div>

    </div>
  )
}

export default App
