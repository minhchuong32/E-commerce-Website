import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Đăng nhập");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Đăng ký") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Đăng ký thành công");
          navigate("/");
        } else {
          toast.error(response.data.message || "Đăng ký thất bại");
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Đăng nhập thành công");
          navigate("/");
        } else {
          toast.error(response.data.message || "Đăng nhập thất bại");
        }
      }
    } catch (error) {
      console.error(
        "Lỗi khi gửi form:",
        error?.response?.data || error.message
      );
      toast.error(error?.response?.data?.message || "Lỗi khi đăng nhập");
    }
  };

  useEffect(() => {
    if (token) {
        navigate("/");
    }
    }, [token, navigate]);

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === "Đăng nhập" ? null : (
          <input
            placeholder="Họ và tên"
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          placeholder="Email"
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Mật khẩu"
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="w-full flex justify-between items-center text-sm mt-[-8px]">
          <p className="cursor-pointer">Quên mật khẩu?</p>
          {currentState === "Đăng nhập" ? (
            <p
              onClick={() => setCurrentState("Đăng ký")}
              className="cursor-pointer hover:text-gray-600 transition-colors duration-300"
            >
              Tạo tài khoản mới
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Đăng nhập")}
              className="cursor-pointer hover:text-gray-600 transition-colors duration-300"
            >
              Đã có tài khoản?
            </p>
          )}
        </div>

        <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
          {currentState}
        </button>
      </form>
    </div>
  );
};  

export default Login;
