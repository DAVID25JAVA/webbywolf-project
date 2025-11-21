import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto">
      <div className="font-bold bg-gray-300 text-black px-4 py-2  ">LOGO</div>
      <nav className="flex space-x-8 text-blue-700 text-sm font-medium">
        <Dropdown label="Lorem Ipsum" />
        <Dropdown label="Lorem Ipsum" />
        <Dropdown label="Lorem Ipsum" />
      </nav>
      <button className="bg-white border border-gray-300 rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
        Sign In
      </button>
    </header>
  );
}

function Dropdown({ label }) {
  return (
    <div className="relative group cursor-pointer">
      <button className="flex items-center space-x-1">
        <span>{label}</span>
        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
          <path d="M5.5 7l4.5 4.5L14.5 7z" />
        </svg>
      </button>
    </div>
  );
}
