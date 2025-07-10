import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, like sending data to the server
    // For now, we will just log the current state
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
        action=""
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl"> {currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState == "Login" ? (
          ""
        ) : (
          <input
            placeholder="Name"
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
          />
        )}
        <input
          placeholder="Email"
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
        />
        <div className="w-full flex justify-between items-center text-sm mt-[-8px]">
            <p className="cursor-pointer">
                Forgot password?
            </p>
            {
                currentState === "Login" ? (
                    <p
                        onClick={() => setCurrentState("Sign Up")}
                        className="cursor-pointer hover:text-gray-600 transition-colors duration-300"
                    >
                        Create an account
                    </p>
                ) : (
                    <p
                        onClick={() => setCurrentState("Login")}
                        className="cursor-pointer hover:text-gray-600 transition-colors duration-300"
                    >
                        Already have an account?
                    </p>
                )
            }
        </div>
        <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
          {currentState}
        </button>
      </form>
    </div>
  );
};

export default Login;
