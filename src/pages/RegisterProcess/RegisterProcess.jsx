import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const RegisterProcess = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Signup
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      {/* Pass the toggleForm function as a prop to the Login and Signup components */}
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default RegisterProcess;
