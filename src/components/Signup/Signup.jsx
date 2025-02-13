import { motion } from "framer-motion";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log("Form Data", formData);
  };

  return (
    <>
      <motion.div
        className="flex justify-center bg-white w-full max-w-[50%] h-[60vh] shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="form bg-white p-8 flex flex-col flex-1 text-center justify-center space-y-2">
          <h2>Sign In</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-200 px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-200 px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 px-6 py-2 mt-4 rounded-lg text-white font-semibold hover:bg-blue-400 transition duration-300"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="content bg-red-400 h-full w-full text-center hidden lg:flex flex-col items-center rounded-l-[35%] justify-center py-8">
          <h2 className="text-xl font-bold text-white">Welcome Back!</h2>
          <p className="text-white mb-4 mt-2 text-sm">New User!! SignUp here</p>
          <button className="bg-blue-500 px-6 py-1 rounded-lg text-white font-semibold hover:bg-blue-400 transition duration-300">
            Signup
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Signup;
