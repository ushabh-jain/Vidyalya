"use client"
import React, { useState } from "react";
import { Search,Mail,Shield,Layout } from "lucide-react";
import Image from "next/image";

function SideBarNav() {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
    },
  ];
  const [activeIndex,setActiveIndex]=useState();
  return (
    <div className="h-full w-64 border-r flex flex-col overflow-y-auto shadow-md ">
      <div className="p-5 border-b">
        <img src="logo.png" alt="" width={170} height={100} />
      </div>
      <div className="flex flex-col">
         {menuList.map((item,index)=>(
            <div className={`flex gap-2 items-center p-4 px-6 hover:cursor-pointer ${activeIndex==index?'bg-purple-50 text-purple-800':null}`}
            onClick={()=>setActiveIndex(index)}>
                <item.icon/>
                <h2>{item.name}</h2>
            </div>
         ))}
      </div>
    </div>
  );
}

export default SideBarNav;
