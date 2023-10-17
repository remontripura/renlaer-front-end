import React from "react";
import loginImage from "../../assets/image/login.jpg";
import iconImage from "../../assets/icon/logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full pt-40 pb-20">
      <div className="max-w-5xl rounded-md lg:mx-auto bg-[#fff] mx-5 shadow-md">
        <div className="flex gap-5 p-8">
          <div className="lg:w-1/2 hidden md:flex lg:flex">
            <img className="w-full" src={loginImage} alt="" />
          </div>
          <div className="lg:w-1/2 w-full p-5 bg-white space-y-8">
            <div>
            <img className="w-32" src={iconImage} alt="" />
            </div>
            <div>
              <h2 className="text-[24px] font-bold">Log In</h2>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="email" className="font-semibold text-[14px]">
                    Email
                  </label>
                  <input
                    className="input-style focus:outline outline-1 focus:outline-[#6F81FF] focus:shadow-outline"
                    type="email"
                    {...register("email")}
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label
                    htmlFor="password"
                    className="font-semibold text-[14px]"
                  >
                    Password
                  </label>
                  <input
                    className="input-style focus:outline outline-1 focus:outline-[#6F81FF] focus:shadow-outline"
                    type="password"
                    {...register("password")}
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-start gap-3">
                    <input type="checkbox" name="remember" />
                    <label for="vehicle3">Remember Me</label>
                  </div>
                  <div>
                    <Link className="text-[#6F81FF]">Forgot Password?</Link>
                  </div>
                </div>
                <button
                  className="w-full bg-[#4A5BFF] rounded p-2 font-semibold text-white text-[14px]"
                  type="submit"
                >
                  Login
                </button>
                <div className="text-center">
                  Don’t have an account?{" "}
                  <Link className="text-[#4A5BFF]" to="/register">Sign up for free</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
