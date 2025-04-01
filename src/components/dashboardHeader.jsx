import React from 'react';
import { Bell, ChevronDown, DropletOff, Search, Upload } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { MdArrowDropDown } from "react-icons/md";



export default function DashboardHeader() {

  const Button = ({ children, ...props }) => (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" {...props}>
      {children}
    </button>
  );
  
  const Input = (props) => (
    <input className="px-3 py-2 w-4/6 rounded-md" {...props} />
  );
  

  return (
    <div 
    className=" bg-white shadow-sm w-full ">
     <div className=" border-b shadow-sm">
  <div className=" relative mt-4 w-full max-w-5xl mx-auto font-sans overflow-hidden">
  <div 
      className="flex items-center  justify-between">
     <div  

    //  Searching input

     className="flex items-center p-2">
        <Search className="w-6 h-6 text-gray-600 cursor-pointer"/>
        
        <Input
          type="text"
          placeholder="Search anything here"
          className=" px-4 py-2  placeholder:text-sm rounded-lg focus:outline-none focus:border-none"
        />
     </div>
    <div className="flex items-center gap-7 ">
    
            {/* notification bell */}
    
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
    
        {/* profile  */}
    
    
            <div className="flex items-center gap-2 ">
            <img
            width={30}
            className="rounded-full" 
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/478399979_555014514232885_365921934383569857_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeFo8Jkl6mQXsMslUoo5XdFvjowPdo3yBYqOjA92jfIFikgYXv-Oh_F-GPMX9O0FO3uZMUd65DxPvnBN52wNMPx0&_nc_ohc=ZYB67KspDkoQ7kNvgFPYUza&_nc_oc=AdnhCYeL1YQIWSsS3-d7tMluPWmXpcLPEhHPpBj8BLeh93_vIfwVttAXuka4rBRL_XPgB6YE1xVVU7a4Nu3CJVPA&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=tvhqSB_XmMmPAFdJeQvqWw&oh=00_AYEKquhU_G9y42uvXJqHEZwnZCb515-Zd4Xr9NOhCCmKYQ&oe=67EE6AB9"
            alt="" />
            <p className="font-medium">
            Alexanndra
            </p>
            <MdArrowDropDown className="w-6 h-6 text-gray-600 cursor-pointer"/>
            </div>
    </div>
        
      </div>
  </div>

     </div>

     <div className="flex items-center justify-between gap-6 mt-4 w-full max-w-5xl mx-auto font-sans overflow-hidden">
        <div>
          <h2 className="text-lg font-semibold">Welcome back, Alexandro 👋</h2>
          <p className="text-sm text-gray-500">There is the latest update for the last 7 days. Check now</p>
        </div>
        
        <div className="flex items-center gap-3">
          <select
            className="px-3 py-2 border focus:outline-none rounded-lg bg-gray-100 cursor-pointer "
            
          >
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
          
          <Button className="bg-black text-white px-4 py-2 rounded-lg gap-3 flex items-center">
            <Upload className="w-4 h-4 cursor-pointer"/>
            <span>Export</span>
          </Button>
          
      </div>
      </div>
   
   
    </div>
  );
}
