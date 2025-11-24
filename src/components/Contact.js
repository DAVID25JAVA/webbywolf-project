"use client";
import { MoveRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion"; // 👈 Import Framer Motion

// Validation Schema (same as your existing)
const validationSchema = {
  name: (value) => {
    if (!value) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    return null;
  },
  email: (value) => {
    if (!value) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Invalid email address";
    return null;
  },
  phone: (value) => {
    if (!value) return "Phone number is required";
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(value)) return "Invalid phone number";
    return null;
  },
  timeframe: (value) => {
    if (!value) return "Timeframe is required";
    return null;
  },
  size: (value) => {
    if (!value) return "Size is required";
    return null;
  },
  quantity: (value) => {
    if (!value) return "Quantity is required";
    if (value < 1) return "Quantity must be at least 1";
    return null;
  },
  description: (value) => {
    if (!value) return "Project description is required";
    if (value.length < 10) return "Description must be at least 10 characters";
    return null;
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeframe: "",
    size: "",
    quantity: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    const error = validationSchema[name](value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validationSchema[key](formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        timeframe: "",
        size: "",
        quantity: "",
        description: "",
      });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:px-8 px-4 md:mt-20 my-10">
      <div>
        {/*  Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="  uppercase text-center subheading-lg"
        >
          REQUEST A QUOTE
        </motion.h1>

        {/*  Container Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="min-h-screen py-12 md:px-4"
        >
          {/* 🟩 Form Card Animation */}
          <motion.div
            className="md:max-w-4xl mx-auto bg-white rounded-2xl shadow-xl md:p-8 p-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-800 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border bg-gray-100 text-gray-800 placeholder:text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-800 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeframe
                  </label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 bg-gray-100 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    style={{
                      color: formData.timeframe ? "#111827" : "#6B7280",
                    }}
                  >
                    <option value="">Select timeframe</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3+ months">3+ months</option>
                  </select>
                  {touched.timeframe && errors.timeframe && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.timeframe}
                    </p>
                  )}
                </div>
              </div>

              {/* More Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 bg-gray-100 border placeholder:text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                  </select>
                  {touched.size && errors.size && (
                    <p className="text-red-500 text-sm mt-1">{errors.size}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 bg-gray-100 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    min="1"
                    placeholder="Enter quantity"
                  />
                  {touched.quantity && errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.quantity}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please Describe Your Project
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="5"
                  className="w-full bg-gray-100 text-gray-800 placeholder:text-gray-500 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project requirements..."
                />
                {touched.description && errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <p className="text-gray-700 text-base text-center">
                By submitting this form you agree to our{" "}
                <span className="underline cursor-pointer hover:text-blue-700">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer hover:text-blue-700">
                  Privacy Policy
                </span>
                .
              </p>

              {/* 🟦 Button Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <button
                  onClick={handleSubmit}
                  className="gap-2   cursor-pointer fo    btn-primary flex items-center justify-center"
                >
                  Lorem Ipsum <MoveRight />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
