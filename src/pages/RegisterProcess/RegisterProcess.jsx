import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const RegisterProcess = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Signup
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col">
        {isLogin ? <Login /> : <Signup />}
        <button
          onClick={toggleForm}
          className="mt-5 bg-[#171717] text-white px-4 py-1 rounded-sm shadow-lg"
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </div>
    </>
  );
};

export default RegisterProcess;
