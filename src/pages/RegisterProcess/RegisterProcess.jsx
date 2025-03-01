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
        <button
          type="button"
          onClick={toggleForm}
          className="lg:hidden block mb-4 px-4 py-2 bg-orange-500 text-white rounded"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
        {/* Pass the toggleForm function as a prop to the Login and Signup components */}
        {isLogin ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <Signup toggleForm={toggleForm} />
        )}
      </div>
    </>
  );
};

export default RegisterProcess;
