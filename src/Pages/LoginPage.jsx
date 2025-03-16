import React from "react";
import SideLayout from "./Layout/SideLayout";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleContinue = (event) => {
    event.preventDefault();
    navigate("/homepage");
  };

  return (
    <SideLayout>
      <div className="h-screen bg-white overflow-y-hidden font-Inter">
        <div className="absolute p-4">
          <button className="text-lg text-[#91ac8f] hover:text-[#667964] ease-in-out transition duration-300 mb-4 flex flex-row items-center font-semibold">
            <IoChevronBackOutline size={20} /> Back
          </button>
        </div>
        <div className="flex h-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-3/5 p-8 rounded-md">
              <h2 className="text-3xl font-bold mb-2">Account Login</h2>
              <p className="text-md text-gray-500 mb-6">
                If you are already a member you can login with your email
                address and password.
              </p>

              <form className="space-y-4" onSubmit={handleContinue}>
                <div className="space-y-2 text-[#696f79]">
                  <label htmlFor="email" className="font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-4 border rounded mb-4 border-[#8692a6] outline-none"
                    required
                  />
                </div>
                <div className="space-y-2 text-[#696f79]">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 border rounded mb-4 border-[#8692a6] outline-none"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center text-[#696f79] font-semibold">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a
                    href="/forget-password"
                    className="text-md text-[#91ac8f] hover:text-[#667964] ease-in-out transition duration-300 font-semibold"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#91ac8f] text-white p-3 rounded hover:bg-[#667964] ease-in-out transition duration-300 font-semibold text-md"
                >
                  Continue
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                Don't have an account?{" "}
                <a
                  href="/sign-up"
                  className="text-[#91ac8f] hover:text-[#667964] ease-in-out transition duration-300 font-semibold"
                >
                  Sign up here
                </a>
              </p>

              <div className="flex justify-center mt-4">
                <button className="mx-2">
                  <img
                    src="/Images/google-icon.png"
                    alt="Google"
                    className="w-10 h-10"
                  />
                </button>
                <button className="mx-2">
                  <img
                    src="/Images/facebook-icon.png"
                    alt="Facebook"
                    className="w-10 h-10"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideLayout>
  );
};

export default LoginPage;
