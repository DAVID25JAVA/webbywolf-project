import React from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const menuItems = [
    {
      id: 1,
      items: "Lorem Ipsum",
      icon: <ChevronDown  size={20}/>,
    },
    {
      id: 2,
      items: "Lorem Ipsum",
      icon: <ChevronDown size={20} />,
    },
    {
      id: 3,
      items: "Lorem Ipsum",
      icon: <ChevronDown  size={20}/>,
    },
  ];

  return (
    <header className="relative flex items-center justify-between px-8 py-4 max-w-7xl mx-auto z-10">
      <div className="font-bold text-xl bg-gray-300 text-black px-4 py-2">
        LOGO
      </div>
      <nav className="flex space-x-6 md:pr-28 text-blue-700 text-sm font-semibold">
        {menuItems?.map((item) => (
          <div key={item?.id} className="flex items-center gap-0.5">
            <span>{item?.items}</span>
            <p>{item?.icon}</p>
          </div>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <button className="bg-white   rounded px-6 py-1.5 text-gray-700 font-bold hover:bg-gray-100">
          Sign In
        </button>
      </div>
    </header>
  );
}
