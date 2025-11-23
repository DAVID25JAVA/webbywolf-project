"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      id: 1,
      items: "Lorem Ipsum",
      icon: <ChevronDown size={20} />,
    },
    {
      id: 2,
      items: "Lorem Ipsum",
      icon: <ChevronDown size={20} />,
    },
    {
      id: 3,
      items: "Lorem Ipsum",
      icon: <ChevronDown size={20} />,
    },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-50 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold text-xl bg-gray-300 text-black px-4 py-2"
        >
          LOGO
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:pr-28 text-blue-700 text-sm font-semibold">
          {menuItems?.map((item, index) => (
            <motion.div
              key={item?.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-0.5 cursor-pointer hover:text-blue-900"
            >
              <span>{item?.items}</span>
              <p>{item?.icon}</p>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Sign In Button */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-white rounded px-6 py-1.5 text-gray-700 font-bold hover:bg-gray-100 ${
              isScrolled ? "shadow-xl" : ""
            }`}
          >
            Sign In
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:hidden text-blue-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
        >
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {menuItems?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-0.5 text-blue-700 font-semibold cursor-pointer hover:text-blue-900"
              >
                <span>{item?.items}</span>
                <p>{item?.icon}</p>
              </motion.div>
            ))}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white border border-gray-300 rounded px-6 py-2 text-gray-700 font-bold hover:bg-gray-100 w-full"
            >
              Sign In
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}